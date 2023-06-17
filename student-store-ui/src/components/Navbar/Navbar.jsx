import * as React from "react"
import { Link, Route, Routes} from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className = "navbarContent">
        <div className = "logo">
          <Link to = {"/"}>
            <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo" />
          </Link> 
        </div>
        <div className= "Social-Medias">
          {/* <svg><path></path></svg>
          <svg><path></path></svg>
          <svg><path></path></svg> */}
        </div>
        <ul className = "links">
          <li>
            <Link to = {"/"} >Home</Link>

          </li>
          <li>
            <a href = "#About">About us</a>
          </li>
          <li>
            <a href = "#Contact">Contact us</a>
          </li>
          <li>
            <a href = "/#Buy">Buy Now</a>
          </li>
            
        </ul>

      </div>
    </nav>
  )
}
