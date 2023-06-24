import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'



const getProductForProductView = ( productId) => {
  const [product , setProductData] = useState([])
    const [isFetching, setIsFetching] = useState(true)
  const  fetchProduct = async () => {
      try {
        const {data: response} = await axios.get(`http://localhost:3001/products/${productId}`)  
        console.log(response)
        setProductData(response)

    } catch (error) {
        false
    }
  }
useEffect(() => { fetchProduct() }, [])
  return {
    product
}
}

export default getProductForProductView
