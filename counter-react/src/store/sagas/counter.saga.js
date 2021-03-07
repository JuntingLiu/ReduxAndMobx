import { put, takeEvery, delay } from 'redux-saga/effects'
import { INCREMENT_ASYNC } from '../const/counter.const'
import { increment } from '../actions/counter.action'

function* increment_async_fn (action) {
  // 延迟执行
  yield delay(2000)
  yield put(increment(action.payload))
}

export default function* counterSaga() {
  // 接收 action
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}