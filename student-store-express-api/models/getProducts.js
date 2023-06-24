
const codepathProducts = require("../data/db.json")
console.log('products is this:', codepathProducts)

//get all the products 
const getAllproducts = () => {
    return codepathProducts
}

const getProduct = (productID) => {
    let products = codepathProducts.products
    const product = products.filter((product, index) => product.id == productID )
    return product[0] 
}

const getPurchases = () => {
    return codepathProducts.purchases
}
const getSpecificPurchase = (orderID) => {
    let orders = codepathProducts.purchases
   const SpecificPurchase = orders.filter((order, index) =>
        order.id == orderID
    )
    return SpecificPurchase[0]
}
const addToPurchases = (shoppingCart, name, email) => {
    console.log('first inside of shoppingcart', shoppingCart)
    const purchases = codepathProducts.purchases
    const receiptID  =  purchases.length +1
    const  receipt = {}
    receipt[receiptID] = {'name':name, 'email':email, 'shoppingCart': shoppingCart }
    console.log('inside of addtopurchase:', receipt)
    purchases.push(receipt)
    codepathProducts["purchases"] =purchases
    console.log("Product object key purchases value:", codepathProducts["purchases"])
    return purchases
}
const getLastReceipt = () => {
    const purchases = codepathProducts.purchases
    console.log('last Purchases is (getLASTRECEIPT', purchases )
    const lastReceiptPosition  =  purchases.length -1
    const  lastReceipt  = purchases[lastReceiptPosition]
    const lastReceiptID = purchases.length
    console.log('THIS IS THE LAST RECEIPT', lastReceipt)
    const receiptInformation = lastReceipt[lastReceiptID]
     console.log('productsInReceipt',receiptInformation)
     return receiptInformation
}
const getAllReceipts = () => {
    const receipts = codepathProducts.purchases
    return receipts
}




module.exports = {
    getAllproducts,
    getProduct,
    getPurchases,
    getSpecificPurchase,
    addToPurchases,
    getLastReceipt,
    getAllReceipts

}