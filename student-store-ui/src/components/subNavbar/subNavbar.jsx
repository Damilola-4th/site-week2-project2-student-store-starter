import {React, useState,useEffect }  from 'react'
import "./subNavBar.css"
import filterApiData from '../Api/filterApiData/filterApiData'
import GetApiData from '../Api/GetApiData/GetApiData'
import searchQuery from '../Api/searchQuery/searchQuery'
import { useLocation, useParams } from 'react-router-dom';

const SubNavBar = (props) => {
  const PropssetProductData = props.setProductData
  const PropsproductData = props.productData

  const [testAddingNum, setTestAddingNum] = useState(1)
  const [category, setcategory] = useState("allcategories")
  const [searchValue, setSearchValue] = useState("")

  let location = useLocation()
  location = location.pathname
  
  const callincrementAddingNum = () => {
    setTestAddingNum(testAddingNum+1)
  }
  const { 
    productData , 
    isFetching,
    setProductData,
  } =  GetApiData();
  return (
    <nav className='sub-navbar'>
        <div className='content'>
            <div className='row'>
                <div className='search-bar'>
                    <input type="text" name='search' placeholder='Search' value = { searchValue } onChange={ location == '/'? (event) => {
                        setSearchValue(event.target.value)
                        searchQuery(event, PropssetProductData ,category, productData) 
                        }:null } />
                    <i className="material-icons"> search</i>
                </div>
            <div className = "links">
                <span className = "help">
                    <i className="material-icons">help</i>
                    Help
                </span>
                <div className='cart'>
                    <a href='/' >
                        My Cart
                        <i className='material-icons'>shopping_cart</i>
                    </a>
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className='hamburger-menu'>
                        <i className='material-icons'>menu</i>
                    </div>
                    <ul className='category-menu'>
                        <li className='is-active'>
                            <button  value = "allcategories" onClick={ (event) => {
                                setcategory(event.target.value)
                                filterApiData(event,PropssetProductData, productData, searchValue)
                            }}> All Categories  </button>
                        </li>
                        <li className='is-active'>
                            <button value= 'clothing' onClick = { location == '/'? (event) => {
                                setcategory(event.target.value)
                                filterApiData(event,PropssetProductData, productData, searchValue)
                                
                            }: null } >Clothing</button>
                        </li>
                        <li className='is-active'>
                            <button value = "food" onClick = { location == '/'? (event) => {
                                setcategory(event.target.value)
                                filterApiData(event,PropssetProductData, productData, searchValue)
                            }: null }>Food</button>
                        </li>
                        <li className='is-active'>
                            <button value = "accessories" onClick = { location == '/'? (event) => {
                                setcategory(event.target.value)
                                filterApiData(event,PropssetProductData,  productData, searchValue )
                            }: null }>Accessories</button>
                        </li>
                        <li className='is-active'>
                            <button value = "tech" onClick = { location == '/'? (event) => {
                                setcategory(event.target.value)
                                filterApiData(event,PropssetProductData,  productData, searchValue)
                            }: null} >Tech</button>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
  )
}
export default SubNavBar