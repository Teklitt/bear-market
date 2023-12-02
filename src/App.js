import './global.css'
import logo from '../src/assets/Bear Market logo.png'
import { commerce } from './lib/commerce'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'
import banner from './images/welcome banner.png'
import Login from './Login'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
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
    <div className="App">
      <NavBar totalItems={cart.total_items} />
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />
        <Products products={products} onAddToCart={handleAddToCart} />
        <Cart cart={cart} />

        {!isAuth ? (
          <Login setIsAuth={setIsAuth} />
        ) : (
          <button onClick={signUserOut}>Log out of Google</button>
        )}
      </header>
    </div>
  )
}

export default App
