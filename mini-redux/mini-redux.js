/**
 * createStore(reducer, preloadedState, enhancer)
 * { getState, dispatch, subscribe }
 */

function createStore(reducer, preloadedState) {
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
