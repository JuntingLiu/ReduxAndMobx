import { createStore, combineReducers } from 'redux'
import { } from 'react-redux'
import { counter, modal } from './reducers'

const store = createStore(combineReducers(
  { counter, modal }
))

export default store