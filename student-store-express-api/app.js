// YOUR CODE HERE

const express = require("express")
const app = express();
const cors = require('cors')
const productsRoutes = require("./routes/products")

app.use(cors())
app.use(express.json())
//routes
app.use('/', productsRoutes)





module.exports = app