import React from 'react'

const RemoveFromShoppingCart = (event , itemCount,setItemCount, shoppingCart, setShoppingCart ,product) => {
    const productPrice = product.price
    const productName = product.name
    let productCost
    if (itemCount > 0){
        productCost =  product.price * itemCount
    }else{
        productCost = product.price
    }
    const productCount = itemCount > 0? itemCount - 1: 0
    let checkProductInCart = shoppingCart.filter((product, index) => product.productName == productName )

    const removeProductIfEmpty = (updatedShoppingCart, productInCartIndex) => {
        let currentProductInCart =  updatedShoppingCart[productInCartIndex]
        const productCount = currentProductInCart.itemCount
    
        if (productCount <= 0){
          updatedShoppingCart = updatedShoppingCart.filter((Product, index) => Product.itemCount !== productCount )
        }
        return updatedShoppingCart
      }

    if (checkProductInCart.length !== 0 ){
        console.log('if conding in addtoshoppignCart was hit', true)
        checkProductInCart = checkProductInCart[0]
        checkProductInCart.itemCount -=1
        checkProductInCart.productCost -= product.price
        let updatedShoppingCart = shoppingCart.slice()
        let productInCartIndex 
        shoppingCart.filter((product, index) => product.name == productName? productInCartIndex = index: "")
        updatedShoppingCart[productInCartIndex] = checkProductInCart


        updatedShoppingCart = removeProductIfEmpty(updatedShoppingCart, productInCartIndex)
        setShoppingCart(updatedShoppingCart)

            
    }


    setItemCount(itemCount > 0? itemCount - 1: 0)


  return (
    <div>
      
    </div>
  )
}

export default RemoveFromShoppingCart
