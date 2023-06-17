import * as React from "react"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import SubNavBar from "../subNavbar/subNavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import Contact from "../Contact/Contact"
import About from "../About/About"
import Footer from "../Footer/Footer.jsx"

const Home = (props) =>  {
  const productData = props.productData
  const setProductData = props.setProductData
  
  return (
    
    <div className="home">
      <br></br>
      <p>Home</p>
      <ProductGrid productData = { productData } setProductData = { setProductData } setShoppingCart = { props.setShoppingCart } shoppingCart = { props.shoppingCart }  />
      <About />
      <Contact />
      <Footer />
      

    
      
    </div>
  )
}


export default Home
