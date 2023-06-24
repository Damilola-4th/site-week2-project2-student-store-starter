import {React, useState} from 'react'
import axios from "axios"
const GetShoppingReceipt = async (setPurchases) => {
    const addShoppingCartData = async () => {
    console.log("I'M HIT IM HIT ")
    try {
        const response = await axios.get("http://localhost:3001/currentReceipt");
    //   setShoppingCart([...shoppingCart, response.data])
        console.log(response.data)
        setPurchases(response.data)
    } catch (error) {
        console.error(error)
    }
    }
    addShoppingCartData()
  return (
    <></>
  )
}
export default GetShoppingReceipt