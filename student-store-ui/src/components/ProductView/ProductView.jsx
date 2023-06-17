import React from 'react'
import "./ProductView.css"
import GetApiData from '../Api/GetApiData/GetApiData'
import getProductForProductView from '../Api/getProductForProductView/getProductForProductView';
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';

const ProductView = (props) => {
  
  if (props.productData.length !== 0){

    const { productId } = useParams()
   
    const {product }  = getProductForProductView(props.productData, productId)
    
    return ( 
      <div>
        <h1> { product.id } </h1>
        <ProductCard 
        isActive = 'true'
        key ={ product.id }  
        product = {product} 
        setProductData = { props.setProductData }
        setShoppingCart = { props.setShoppingCart } 
        shoppingCart = { props.shoppingCart }   />
        <div className = 'description'>
          <p > {product.description} </p>  
        </div>  
      </div>
      
    )
  }
}

export default ProductView
