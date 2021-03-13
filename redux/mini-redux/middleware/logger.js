function logger (store) {
  return function (next) {
    // 触发 action 时，执行的是最里层的函数，下方的函数
    return function (action) { // next 就是下一个中间件函数
      console.log('logger');
      next(action)
    }
  }
}