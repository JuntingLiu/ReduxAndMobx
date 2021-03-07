import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import logger from './middleware/logger'
import thunk  from './middleware/thunk'

const store = createStore(rootReducer, /* 中间件 */ applyMiddleware(
  thunk,
  logger,
))

export default store