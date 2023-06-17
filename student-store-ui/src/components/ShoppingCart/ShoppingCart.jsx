import React from 'react'
import "./ShoppingCart.css"
import AddtoShoppingCart from '../AddtoShoppingCart'
import ShoppingCartTotal from '../ShoppingCartTotal'
import CartTable from '../CartTable/CartTable'
const ShoppingCart = (props) => {
  const {subTotal, totalCost} = ShoppingCartTotal(props.shoppingCart)
  return (
    <div>
      <table className = "Header">
      <tbody>
      <tr id = '  highlight'>
            
          
      
        <th> <div className = "name"> Name </div></th>
        <th><div className = "quantity"> Quantity </div></th>
        <th><div className = "unit-price">Unit Price </div></th>
        <th><div className = "cost">Cost </div></th>
            
      </tr>
      </tbody>
      </table>
      <table className = 'Products'>
        <tbody>

        
          
          
       
        
       
        
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
