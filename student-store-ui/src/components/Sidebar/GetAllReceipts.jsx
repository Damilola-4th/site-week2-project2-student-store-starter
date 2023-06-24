import React from 'react'
import axios from "axios"
const GetAllReceipts = async (setViewAllReceipts) => {
    const addShoppingCartData = async (setViewAllReceipts) => {
        try {
          const response = await axios.get("http://localhost:3001/allProducts");
          console.log(response.data)
          setViewAllReceipts(response.data)
        } catch (error) {
          console.error(error)
        }
      }
     addShoppingCartData(setViewAllReceipts)
  return (
    <div></div>
  )
}

export default GetAllReceipts