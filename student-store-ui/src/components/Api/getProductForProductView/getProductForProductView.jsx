import React from 'react'

const getProductForProductView = (OriginalproductData, productId) => {
  let product = OriginalproductData.filter((product, index) => product.id == productId )
  product = product[0]
  return {
    product
}
}

export default getProductForProductView
