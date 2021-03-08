import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

import { loadProducts } from '../actions/product.action'

function * handleLoadProducts() {
  const {data} = yield axios.get('http://locahost:3005/goods')
  console.log(data);
}

export default function* productSaga() {
  // 加载商品列表数据
  yield takeEvery(loadProducts, handleLoadProducts)
}