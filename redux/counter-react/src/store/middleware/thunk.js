// 传递是一个函数，就认为是异步操作，将异步操作就会给传递的函数进行操作
const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }
  next(action)
}
export default thunk