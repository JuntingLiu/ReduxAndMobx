import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/root.reducer'
import rootSaga from './sagas/root.saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export default store

sagaMiddleware.run(rootSaga)