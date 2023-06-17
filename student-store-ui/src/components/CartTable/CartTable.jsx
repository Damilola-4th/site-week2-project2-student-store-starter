import React from 'react'
import "./cartTable.css"
const CartTable = (props) => {
  const productCount  = props.product.itemCount
  const productName = props.product.productName
  const productPrice = props.product.productPrice
  const productCost = props.product.productCost
  return (
    <tr>
          
          <td><div className = "name"> {productName}</div></td>
          <td><div className = "quantity"> { productCount }</div></td>
          <td><div className = "unit-price">{productPrice}</div></td>
          <td><div className = "cost" >{ productCost }</div></td>
          
         
    </tr>
  )
}

export default CartTable
