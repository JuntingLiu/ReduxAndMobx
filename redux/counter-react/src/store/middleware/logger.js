const logger = (store) => next => action => {
  console.log(store, action)
  next(action)
}
export default logger