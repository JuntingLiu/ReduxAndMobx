import { createAction } from 'redux-actions'

// 想服务端发送请求，获取商品列表数据
export const loadProducts = createAction('load products')
// 将商品列表数据保存到本地 store 对象中
export const saveProducts = createAction('save products')
