import { takeEvery, put, delay } from 'redux-saga/effects'
import { HIDE_ASYNC } from '../const/modal.const'
import { hide } from '../actions/modal.action'

function* hide_async_fn(action) {
  yield delay(3000)
  yield put(hide())
}

export default function* modalSaga() {
  yield takeEvery(HIDE_ASYNC, hide_async_fn)
}