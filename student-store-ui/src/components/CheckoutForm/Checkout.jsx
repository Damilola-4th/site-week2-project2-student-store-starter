import React from 'react'
const CheckoutForm = (props) => {
  const shoppingcart = props.purchases.shoppingCart
  let subtotal = 0
  shoppingcart.map((product) => {
    subtotal += product.productCost
  })
  let totalcost = 0
  totalcost = subtotal * 1.05
  totalcost = totalcost.toFixed(2)
  console.log(shoppingcart)
  return (
    <div className='card'>
      <header className='card-head'>
        <h4 className='card-title'>Receipt</h4>
      </header>
      <section className='card-body'>
        <p className='header'>Showing receipt for {props.name} available at {props.email}</p>
        <ul className='purchase'>
          {shoppingcart.map((product, index) =>
            <li key = {index}>{product.itemCount} total {product.productName} purchased at a cost of ${product.productPrice} for a total cost of ${product.productCost}</li>
          )}
          <li>Before taxes, the subtotal was ${subtotal}</li>
          <li>After taxes and fees were applied, the total comes out to ${totalcost}</li>
        </ul>
      </section>
    </div>
  )
}
export default CheckoutForm