import React from 'react'

const CartTable = (props) => {
  const productCount  = props.product.itemCount
  const productName = props.product.productName
  const productPrice = props.product.productPrice
  const productCost = props.product.productCost
  return (
    <tr>
          
          <td>{productName}</td>
          <td>{ productCount }</td>
          <td>{productPrice}</td>
          <td>{ productCost }</td>
          
         
    </tr>
  )
}

export default CartTable
