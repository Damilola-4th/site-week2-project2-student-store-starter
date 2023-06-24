import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const GetApiData = () => {
  const [productData , setProductData] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  
  const fetchApi = async ()  => {
    try {
        const {data: response} = await axios.get('http://localhost:3001')  
        setProductData(response.products)
    } catch (error) {
        setIsFetching(false)
    }
    
  }
  useEffect(() => { fetchApi() }, [])

  
 
  return {
    
    productData,
    isFetching,
    setProductData,
  }
}

export default GetApiData
