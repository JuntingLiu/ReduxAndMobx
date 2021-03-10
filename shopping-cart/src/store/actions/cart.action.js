import { createAction } from 'redux-actions'

// 1. 向服务器端发送请求，告诉服务器端我们要将哪一个添加到购物车中
export const addProductToCart = createAction('addProductToCart')
// 2. 将商品添加到本地购物车中（ store 对象）
export const addProductToLocalCart = createAction('addProductToLocalCart')
// 3. 向服务器端发送请求，获取购物车列表数据
export const loadCarts = createAction('loadCarts')
// 4. 将服务端返回的购物车列表数据同步到本地的购物中
export const saveCarts = createAction('saveCarts')
// 5. 向服务端发送删除请求，删除购物车中的商品
export const deleteProduct = createAction('deleteProduct')
// 6. 删除本地购物车中的商品
export const deleteProductFromLocalCarts = createAction('deleteProductFromLocalCarts')
// 7. 向服务器端发送请求，更新商品的数量
export const changeServiceProductNumber = createAction('changeServiceProductNumber')
// 8. 更新本地购物车中商品的数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber')