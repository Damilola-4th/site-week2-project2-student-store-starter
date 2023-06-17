import React from 'react'
import "./Product.css" 
import ProductCard from "../ProductCard/ProductCard"

const ProductGrid = (props) => {
  
  const productDataArray = props.productData
  const setProductData = props.setProductData
  
  return (
    <div className='product-grid'>
      <div className='content'>
        <div className='productgrid'>
        { productDataArray && (productDataArray.map((product, index) => (
          <ProductCard 
          isActive = 'false'
          key ={ product.id }  
          product = {product} 
          setProductData = { setProductData }
          setShoppingCart = { props.setShoppingCart } 
          shoppingCart = { props.shoppingCart }   />
        )  )) }
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
