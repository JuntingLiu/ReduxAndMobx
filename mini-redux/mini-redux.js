/**
 * createStore(reducer, preloadedState, enhancer)
 * { getState, dispatch, subscribe }
 */

function createStore(reducer, preloadedState) {
  // 约束 reducer
  if (typeof reducer !== 'function') {
    throw new Error('reducer 必须是函数')
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