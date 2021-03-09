import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'

import { addProductToCart, addProductToLocalCart, deleteProduct, deleteProductFromLocalCarts, loadCarts, saveCarts } from '../actions/cart.action'

function* handleAddProductToCart(action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  yield put(addProductToLocalCart(data))
}

function* handleLoadCarts(action) {
  const { data } = yield axios.get('http://localhost:3005/cart')
  // 将购物车数据同步到本地
  yield put(saveCarts(data))
}


function* handleDeleteProduct(action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete', {
    params: { cid: action.payload }
  })
  yield put(deleteProductFromLocalCarts(data.index))
}

export default function* cartSaga() {
  // 将商品添加到购物车中
  yield takeEvery(addProductToCart, handleAddProductToCart)
  // 向服务器端发送请求 获取购物车列表数据
  yield takeEvery(loadCarts, handleLoadCarts)
  // 想服务器端发送请求 删除购物车中指定商品
  yield takeEvery(deleteProduct, handleDeleteProduct)
}
