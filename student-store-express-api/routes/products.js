const express = require("express")
const router = express.Router();
const codepathProducts = require("../models/getProducts");

// Get all Products route
router.post("/", (request, response) => {
    console.log('request body', request.body)
    const { shoppingCart, name, email}  = request.body
    console.log('purchases info IN ROUTER:', request.body)
    const newShoppingCart = codepathProducts.addToPurchases(shoppingCart, name, email)
    response.json(newShoppingCart)
})

router.get('/', (request, response) => {
    const products = codepathProducts.getAllproducts();
    response.json(products);
    console.log(products)
});

router.get('/products/:id', (request, response) => {
    const product = codepathProducts.getProduct(request.params.id)
    response.json(product)
    console.log(product)
})

// router.get('/checkout', (request, response) => {
//     const purchases = userProducts.getPurchases()
//     response.json(purchases)
// })
// router.get('/checkout', (request, response) => {
//     const specificPurchase = userProducts.getSpecificPurchase(request.params.id)
//     response.json(specificPurchase)
// })
router.get('/currentReceipt', (request, response) => {
    console.log('HELLO HELLO I WAS CALLD?')
    const lastReceipt = codepathProducts.getLastReceipt()
    response.json(lastReceipt)
})
router.get('/allProducts', (request, response) => {
    const allReceipts = codepathProducts.getAllReceipts()
    response.json(allReceipts)
})

module.exports = router
