/**
 * createStore(reducer, preloadedState, enhancer)
 * { getState, dispatch, subscribe }
 */

function createStore(reducer, preloadedState) {
  // 当前存储的初始状态
  let currentState = preloadedState
  // 存放订阅者
  const listenerQueue = []

  function getState () {
    return currentState
  }

  function dispatch (action) {
    currentState = reducer(currentState, action)

    // 循环数组 调用订阅者
    for (let i = 0; i < listenerQueue.length; i++) {
      const listener = listenerQueue[i]
      listener()
    }
  }

  function subscribe (fn) {
    listenerQueue.push(fn)
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}
