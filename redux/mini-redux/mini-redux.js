/**
 * createStore(reducer, preloadedState, enhancer)
 * { getState, dispatch, subscribe }
 * enhancer (增强): typeof enhancer === 'function'
 */

function createStore(reducer, preloadedState, enhancer) {
  // 约束 reducer
  if (typeof reducer !== 'function') {
    throw new Error('reducer 必须是函数')
  }
  // 判断是否传递 enhancer 参数，是不是一个函数
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('enhancer 必须是函数')
    }
    // 返回生成更加强大的 Store，给调用者自主权限
    return enhancer(createStore)(reducer, preloadedState)
  }

  // 当前存储的初始状态
  let currentState = preloadedState
  // 存放订阅者的消息队列
  const listenerQueue = []

  // 获取状态
  function getState () {
    return currentState
  }

  // 触发器 - 触发 action
  function dispatch (action) {
    // 判断 action 是否是对象
    if (!isPlainObject(action)) {
      throw new Error('action 必须是对象')
    }
    // 判断对象中是否具有 type 属性
    if (typeof action.type === 'undefined') {
      throw new Error('action 对象必须包含 type 属性')
    }

    currentState = reducer(currentState, action)

    // 循环数组 调用订阅者
    for (let i = 0; i < listenerQueue.length; i++) {
      const listener = listenerQueue[i]
      listener()
    }
  }

  // 订阅状态 => 状态变更后执行回调函数 fn， fn 存放在订阅者消息列表
  function subscribe (fn) {
    listenerQueue.push(fn)
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

// 判断参数是否是对象
// 通过当前参数的顶层原型对象和当前参数的原型对象进行对比，如果相等就是 object
function isPlainObject (obj) {
  // 采用排除法
  // 1. 排除基本类型和 null
  if (typeof obj !== 'object' || obj === null) return false

  // 2. 区分数组和对象
  let proto = obj
  // 通过不断地获取对象原型, 原型对象对比
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}
// console.log(isPlainObject({}));
// console.log(isPlainObject([]));
// console.log(isPlainObject('a'));
// console.log(isPlainObject(true));
// console.log(isPlainObject(1));

// applyMiddleware 函数就是内置提供的 enhancer 增强函数
function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadedState) {
      const store = createStore(reducer, preloadedState)
      // 阉割版 store
      const middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch
      }
      // 调用中间件的第一层函数，传递阉割版的 store
      const chain = middlewares.map(middleware => middleware(middlewareAPI))
      // 处理第二层函数
      const dispatch = compose(...chain)(store.dispatch)
      // 返回一个增强的 store
      return {
        ...store,
        dispatch
      }
    }
  }
}

function compose(...funcs) {
  // 需要倒序处理，因为当前传递的 next 中间件是下一个中间件，所以需要倒序处理，返回最后的中间件，就是我们需要执行的第一个中间件
  return function (dispatch) {
    for (let i = funcs.length -1; i >= 0; i--) {
      dispatch = funcs[i](dispatch)
    }
    return dispatch
  }
}

// action 生成方法
function bindActionCreators (actionCreators, dispatch) {
  const boundActionCreators = {}

  for (let key in actionCreators) {
    boundActionCreators[key] = () => dispatch(actionCreators[key]())
  }
  return boundActionCreators
}


function combineReducers (reducers) {
  // 1. 检查 reducer 类型，它必须是函数
  const reducerKeys =  Object.keys(reducers)

  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i]

    if (typeof reducers[key] !== 'function') {
      throw new Error('reducer 必须是函数')
    }
  }
  // 2.调用一个个小的 reducer，将每个小的 reducer 中返回的状态存储在一个新的大对象中
  return function (state, action) {
    const nextState = {}

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      nextState[key] = reducer(previousStateForKey, action)
    }
    return nextState
  }
}