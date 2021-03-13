import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import logger from './middleware/logger'
import thunk  from './middleware/thunk'
//redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'

const sagaMiddleware = new createSagaMiddleware()

const store = createStore(rootReducer, /* 中间件 */ applyMiddleware(
  thunk,
  logger,
  sagaMiddleware,
))

// 启动
sagaMiddleware.run(rootSaga)

export default store