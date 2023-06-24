import React from 'react'
import PostShoppingCartData from './PostShoppingCartData'
import GetShoppingReceipt from './GetShoppingReceipt'
import GetAllReceipts from './GetAllReceipts'

const CheckoutFunctionality = ( ) => {
    const handleNameChange = (event, name, setName) => {
        console.log(event.target.value)
        setName(event.target.value)
        console.log(name)
    }
    const handleEmailChange = (event, email, setEmail) => {
      
      setEmail(event.target.value)
      console.log(email)
    }
    
    const handleInputValues = async (value, setInputValues) => {
        setInputValues(value)
      }
    const handleCheckout = async (event , shoppingCart, shoppingCartLength,setShoppingCart ,purchases, setPurchases, name, email, setInputValues ) => {
        console.log('NAME', name)
        if(shoppingCartLength == 0) {
          return null
        }
        if ((name.trim().length !== 0 && email.trim().length !== 0)) {
          console.log(shoppingCart)
          await PostShoppingCartData(shoppingCart, name, email )
          await GetShoppingReceipt(setPurchases)
          console.log(purchases)
          setShoppingCart([])
            await handleInputValues(true, setInputValues)
        } else {
          await handleInputValues(false, setInputValues)
        }
    }

    const handleViewPurchases = async (event, setViewAllReceipts) => {
        await GetAllReceipts(setViewAllReceipts);
    };
  return {
    handleCheckout,
    handleNameChange,
    handleEmailChange,
    handleViewPurchases
}

}

export default CheckoutFunctionality
