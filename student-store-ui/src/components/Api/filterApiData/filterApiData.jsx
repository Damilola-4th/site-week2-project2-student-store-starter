import React from 'react'
import GetApiData from '../GetApiData/GetApiData'

const filterApiData = (event, PropssetProductData, OriginalproductData, searchValue) => {
 
  

  
  let validCategories = []
  const getValidCategories = (product) => {

    if (validCategories.includes(product.category) == false){
      validCategories.push(product.category)
    }
  }
  OriginalproductData.map((product, index) => getValidCategories(product) )

  const userquery = event.target.value
 
  let productDataArray 
  if (validCategories.includes(userquery)){
    productDataArray = OriginalproductData.filter((product,indx) => userquery == product.category  )
  }else if (userquery === "allcategories"){
    productDataArray = OriginalproductData
  }

  if (searchValue !== ""){
    productDataArray = productDataArray.filter((product, indx) => product.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
  }   


  
    

  PropssetProductData(productDataArray)



  
  return (
    
    <div>
      
    </div>
  )
}

export default filterApiData
