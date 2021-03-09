import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as productActions from '../store/actions/product.action'

class Product extends React.Component {
  componentDidMount() {
    // 发送请求，获取商品数据
    const { loadProducts } = this.props
    loadProducts()
  }

  render() {
    const { products } = this.props
    console.log("🚀 ~ file: Product.js ~ line 16 ~ Product ~ render ~ products", products)
    return (
      <section className="container content-section">
        <h2 className="section-header">商品列表</h2>
        <div className="shop-items">
          {
            products.map(product => (
              <div className="shop-item" key={product.id}>
                <img className="shop-item-image" src={product.thumbnail} alt=""/>
                <span className="shop-item-title">{product.title}</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">￥{product.price || 0}</span>
                  <button className="btn btn-primary shop-item-button" type="button">加入购物车</button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators(productActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Product)