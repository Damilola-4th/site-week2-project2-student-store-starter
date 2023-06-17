import React from 'react'

const searchQuery = (event, PropssetProductData ,category, OriginalproductData  ) => {

    
    let validCategories = []
    const getValidCategories = (product) => {
      if (validCategories.includes(product.category) == false){
        validCategories.push(product.category)
      }
    }
    OriginalproductData.map((product, index) => getValidCategories(product) )
  
    const userquery = event.target.value

    let productDataArray = OriginalproductData
    if (validCategories.includes(category)){
        productDataArray = productDataArray.filter((product, indx) => category == product.category )
    }
    productDataArray = productDataArray.filter((product, indx) => product.name.toLowerCase().indexOf(userquery.toLowerCase()) !== -1 )
  
    const setdata = (productDataArray,PropssetProductData, OriginalproductData) => {
      if (productDataArray.length !== 0 && userquery !== ""  ) {
        PropssetProductData(productDataArray)
      }else if ( validCategories.includes(userquery) ){
        PropssetProductData(OriginalproductData)
      }else{
        PropssetProductData(productDataArray)
      }
    }
    setdata(productDataArray, PropssetProductData, OriginalproductData)
  return (
    <div>
      
    </div>
  )
}

export default searchQuery
