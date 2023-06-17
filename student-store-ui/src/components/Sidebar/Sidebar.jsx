import React from "react"
import "./Sidebar.css"
import {useState} from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
export default function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <section className={sidebar? `sidebar open` : `sidebar closed`}>
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={showSidebar}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className={sidebar? 'open' : `closed`}>
            <h3>Shopping Cart
              <span className="button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
            </h3>
            <div className={sidebar? `notification open` : `notification closed`}>
            </div>
            <div className={sidebar? `checkout-form open` : `checkout-form closed`}>
              <h3>Payment Info</h3>
            </div>
          </div>
          <div className="cart-icons">
            <span className="cart-icon icon button">
            <span className="cart-icon icon button">
              <i className={sidebar? `material-icons md-48 closed` : `material-icons md-48 open`}>add_shopping_cart</i></span>
            </span>
            <span className="cart-icon icon button">
              <i className={sidebar? `material-icons md-48 closed` : `material-icons md-48 open`}>monetization_on</i>
              </span>
              <span className="cart-icon icon button">
                <i className={sidebar? `material-icons md-48 closed` : `material-icons md-48 open`}>fact_check</i>
                </span>
          </div>
        </div>
      </div>
      {props.shoppingCart.length > 0 &&<ShoppingCart shoppingCart = {props.shoppingCart}/>}
    </section>
  )
}









    