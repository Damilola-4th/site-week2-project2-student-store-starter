import React from 'react'
import ProductView from '../ProductView/ProductView'
const ProductDetail = (props) => {
  return (
    < ProductView 
    productData = { props.productData } 
    setProductData = { props.setProductData } 
    setShoppingCart = { props.setShoppingCart } 
    shoppingCart = { props.shoppingCart } /> 
  )
}

export default ProductDetail
