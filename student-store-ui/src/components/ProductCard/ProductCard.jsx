import React from 'react'
import { useState} from "react"
import ProductDetail from '../ProductDetail/ProductDetail'
import { Link } from 'react-router-dom'
import AddtoShoppingCart from '../AddtoShoppingCart'
import RemoveFromShoppingCart from '../RemoveFromShoppingCart'
import "./ProductCard.css"

const ProductCard = (props) => {
  const [itemCount, setItemCount] = useState(0)
  const productImage = props.product.image
  const productName = props.product.name
  const productPrice = props.product.price
  const productId = props.product.id


  return (
    <div className='product-card' id = {props.isActive == 'true'? 'true': 'false' }>
      
      <div className='picture'>
        <Link to= { `/products/${productId}` }> <img  src= {productImage}  />  </Link>
      </div>
      <div className='product-info'>
        <div className = 'info'>
            <p className = 'product-name'> {productName}</p> 
            <div className='stars'></div>
            <p className='product-price'>{ productPrice }</p>
        </div>

        <div className='actions'>
            <div className='buttons'>
                <button className = "add" value = { props.shoppingCart } onClick = { (event) => { AddtoShoppingCart(
                   event ,
                   itemCount,
                   setItemCount,
                   props.shoppingCart, 
                   props.setShoppingCart 
                   ,props.product)} } >
                ➕ 
                </button>
                <button className = "remove" value = '➖' onClick = { (event) => {  RemoveFromShoppingCart(
                  event ,
                  itemCount,
                  setItemCount,
                  props.shoppingCart, 
                  props.setShoppingCart 
                  ,props.product
                )} }   >
                ➖
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
