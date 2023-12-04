import './global.css'

import { commerce } from './lib/commerce'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'

import Login from './Login'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Checkout from './components/CheckoutForm/Checkout/Checkout'
import Profile from './components/Profile/Profile.jsx'
import Carousel from './components/Carousel/Carousel.jsx'
import { Button } from '@mui/material'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [products, setProducts] = useState([])

  const [cart, setCart] = useState({ line_items: [] })
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ limit: 100 })
    setProducts(data)
  }
  console.log(products)
  const fetchCategories = async () => {
    const { data } = await commerce.categories.list()
    //setCategories(data)
  }
  // console.log(categories)
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item)
    // console.log(item)
    // console.log(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity })

    setCart(item)
  }

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId)

    setCart(item)
  }

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty()

    setCart(item)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      )

      setOrder(incomingOrder)

      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
    fetchCategories()
  }, [])

  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.reload(false)
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar totalItems={cart.total_items} />
        <Carousel />
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {!isAuth ? (
                    <Login setIsAuth={setIsAuth} />
                  ) : (
                    <button onClick={signUserOut}>Log out of Google</button>
                  )}
                </>
              }
            />

            <Route
              path="/Products"
              element={
                <Products products={products} onAddToCart={handleAddToCart} />
              }
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onUpdateCartQty={handleUpdateCartQty}
                  onRemoveFromCart={handleRemoveFromCart}
                  onEmptyCart={handleEmptyCart}
                />
              }
            />
            <Route path="/Checkout" element={<Checkout cart={cart} />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route
              path="/logout"
              element={<button onClick={signUserOut}>Log out of Google</button>}
            />
          </Routes>

          <Link to="Products">
            <Button>Start Shopping</Button>
          </Link>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
