import React from 'react'
import logo from '../assets/Bear Market logo.png'
import '../css/Navbar.css'
import { Badge, Typography, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <img src={logo} className="navbar-logo" alt="logo" />
        <p>
          Deliver to <br></br> 📍 Baltimore 21212
        </p>
        <div className="search-container">
          <button>Filter ⌄</button>
          <input type="text" placeholder="Search Bear Market" />
          <button type="submit">Submit</button>
        </div>
        <p>
          Hello Tariq, <br></br> Account Details ⌄
        </p>
        <a href="javascript:void">
          {' '}
          Returns & <br></br>Orders
        </a>
        <p>
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={5} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </p>
      </div>
      <div className="navbar-categories">
        <a href="javascript:void">All</a>
        <a href="javascript:void">School Supplies</a>
        <a href="javascript:void">Electronics</a>
        <a href="javascript:void">Books</a>
        <a href="javascript:void">Clothing</a>
        <a href="javascript:void">Food</a>
        <a href="javascript:void">Subscribe & Save</a>
      </div>
    </nav>
  )
}

export default NavBar
