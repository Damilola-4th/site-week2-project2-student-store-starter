import React from 'react'
const ShoppingCartTotal = (shoppingCart) => {
let totalCost = 0
let subTotal = 0
shoppingCart.map((element) => {
    subTotal += element.productCost
})

totalCost = subTotal * 1.05
totalCost = totalCost.toFixed(2)
subTotal = subTotal.toFixed(2)
  return {

      subTotal,
      totalCost
   
  }
}
export default ShoppingCartTotal




