import * as React from "react"
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react"


import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Sidebar from "../Sidebar/Sidebar"
import SubNavBar from "../subNavbar/subNavbar"
import ViewPurchases from "../ViewPurchases/ViewPurchases"
import  ProductDetail from "../ProductDetail/ProductDetail"
import GetApiData from "../Api/GetApiData/GetApiData"
import notFound from "../notFound/notFound"
import "./App.css"




export default function App() {

  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(true)
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckOutForm] = useState("")
  const [viewAllReceipts, setViewAllReceipts] = useState([])

  const { 
    productData , 
    isFetching,
    setProductData,
  } =  GetApiData();
  
  

  return ( 
    
    <div className="app">
      <BrowserRouter>
        <main>
        <div>
        <Navbar />
        <Hero />
        < SubNavBar productData = { productData } setProductData = {setProductData}  />
      
        
        </div>
        
        <Sidebar 
        shoppingCart = { shoppingCart } 
        setShoppingCart = {setShoppingCart}
        viewAllReceipts = {viewAllReceipts}
        setViewAllReceipts = {setViewAllReceipts} />
        <div>
        <Routes>
          <Route path = "/" element = { <Home productData = {productData} setProductData = {setProductData} setShoppingCart = { setShoppingCart } shoppingCart = { shoppingCart } />} />
          <Route path = {`/products/:productId`} element = { <ProductDetail productData = { productData } setProductData = { setProductData } setShoppingCart = { setShoppingCart } shoppingCart = { shoppingCart } /> }  />
          
          <Route
            path="/checkout"
            element={
              <ViewPurchases
                viewAllReceipts={viewAllReceipts}
              />
            }
          />
          <Route path= "*" Component= { notFound} /> 

        </Routes>
          <br></br>

          
          {/* YOUR CODE HERE */}
          <br></br>
          
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}
