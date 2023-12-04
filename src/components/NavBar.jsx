import React from 'react'
import logo from '../assets/Bear Market logo.png'
import '../css/Navbar.css'
import { Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button'

const NavBar = ({ totalItems }) => {
  const location = useLocation()

  return (
    <>
      <nav>
        <div className="navbar-container">
          <Link to="/">
            <img src={logo} className="navbar-logo" alt="logo" />
          </Link>
          <p>
            Deliver to <br></br> 📍 Baltimore 21212
          </p>
          <div className="search-container">
            <button>Filter ⌄</button>
            <input type="text" placeholder="Search Bear Market" />
            <button type="submit">Submit</button>
          </div>
          <p>
            Hello Jin Guo, <br></br>
            <Button
              component={Link}
              to="/Profile"
              variant="outlined"
              color="secondary"
              size="small"
            >
              Account Details
            </Button>
          </p>
          <a href="javascript:void">
            {' '}
            Returns & <br></br>Orders
          </a>
          <p>
            {location.pathname === '/' ||
              (location.pathname === '/Products' && (
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              ))}
          </p>
        </div>
        <div className="navbar-categories">
          <a href="/Products">All</a>
          <a href="javascript:void">School Supplies</a>
          <a href="javascript:void">Electronics</a>
          <a href="javascript:void">Books</a>
          <a href="javascript:void">Clothing</a>
          <a href="javascript:void">Food</a>
          <a href="javascript:void">Subscribe & Save</a>
        </div>
      </nav>
    </>
  )
}

export default NavBar
