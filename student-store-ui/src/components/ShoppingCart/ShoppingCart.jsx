import React from 'react'
import "./ShoppingCart.css"
import AddtoShoppingCart from '../AddtoShoppingCart'
import ShoppingCartTotal from '../ShoppingCartTotal'
import CartTable from '../CartTable/CartTable'
const ShoppingCart = (props) => {
  const {subTotal, totalCost} = ShoppingCartTotal(props.shoppingCart)
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th> Unit Price</th>
            <th>Cost</th>
          </tr>
        
       
        
          { props.shoppingCart.map((product,index) => (
            <CartTable key = { index } product = { product}  />
          ))}
        </tbody>
      </table>
      <h1>Total Cost: {totalCost}</h1>
      <h1>Subtotal Cost: {subTotal}</h1>
      
      
    </div>
  )
}

export default ShoppingCart
