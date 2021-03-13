import { handleActions as createReducer } from 'redux-actions'

import { addProductToLocalCart, changeLocalProductNumber, deleteProductFromLocalCarts, saveCarts } from '../actions/cart.action'


const initialState = []

// 将商品添加到本地的购物车数据中
const handleAddProductToLocalCart = (state, action) => {
  // 1. 要添加的商品不存在购物车中， 直接添加
  // 2. 要添加的商品已存在，商品数量 + 1

  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state))
  // 查找添加的商品是否存在购物车
  const product = newState.find(product => product.id === action.payload.id)

  if (product) {
    // 商品已经存在
    product.count = product.count + 1
  } else {
    // 商品不存在
    newState.push(action.payload)
  }
  return newState
}

const handleSaveCarts = (state, action) => action.payload

const handleDeleteProductFromLocalCarts = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.splice(action.payload, 1)
  return newState
}

const handleChangeLocalProductNumber = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  product.count = action.payload.count
  return newState
}

export default createReducer({
  [addProductToLocalCart]: handleAddProductToLocalCart,
  // 将服务端返回的购物车数据同步到本地 store 中
  [saveCarts]: handleSaveCarts,
  // 删除本地购物车中的商品
  [deleteProductFromLocalCarts]: handleDeleteProductFromLocalCarts,
  // 更新购物车商品数量
  [changeLocalProductNumber]: handleChangeLocalProductNumber
}, initialState)