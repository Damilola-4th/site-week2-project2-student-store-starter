import React from 'react'

const AddtoShoppingCart = (event , itemCount,setItemCount, shoppingCart, setShoppingCart ,product) => {
  const  updatedproductCount = itemCount + 1
  const productPrice = product.price
  const productName = product.name
  let productCost
  if (itemCount > 0){
    productCost =  product.price * itemCount
  }else{
    productCost = product.price
  }
  let checkProductInCart = shoppingCart.filter((product, index) => product.productName == productName )

  

  

  if (checkProductInCart.length !== 0 ){
    checkProductInCart = checkProductInCart[0]
    checkProductInCart.itemCount +=1
    checkProductInCart.productCost += productCost
    let updatedShoppingCart = shoppingCart.slice()
    let productInCartIndex 
    shoppingCart.filter((product, index) => product.name == productName? productInCartIndex = index: "")
    updatedShoppingCart[productInCartIndex] = checkProductInCart
  
    setShoppingCart(updatedShoppingCart)
 
       
  }else{
    const itemObject = {
        itemCount: updatedproductCount,
        productName: productName,
        productPrice: productPrice,
        productCost: productCost
        
    }
    let copyShoppingCart = shoppingCart.slice()   
    copyShoppingCart.push(itemObject)
    setShoppingCart(copyShoppingCart)
  }

  
  setItemCount(itemCount+1)
  

  
  
  return (
    <div>
      
    </div>
  )
}

export default AddtoShoppingCart
