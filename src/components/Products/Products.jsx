import React from 'react'
import Grid from '@mui/material/Grid'
import Product from './Product/Product'
import { useState } from 'react'

const Products = ({ products, onAddToCart }) => {
  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])

  const filterProducts = (searchtext) => {
    const regex = new RegExp(searchtext, 'i') // 'i' flag for case-insensitive search
    return products.filter(
      (item) =>
        regex.test(item.name) ||
        regex.test(item.description) ||
        regex.test(item.price.toString())
    )
  }
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterProducts(e.target.value)
        setSearchedResults(searchResult)
      }, 500)
    )
  }
  return (
    <>
      <input
        type="text"
        placeholder="Search Bear Market"
        value={searchText}
        onChange={handleSearchChange}
        required
      />
      <main>
        <input
          type="text"
          placeholder="Search Bear Market"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
        <Grid container justify="center" spacing={4}>
          {searchedResults.length > 0
            ? searchedResults.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))
            : products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
        </Grid>
      </main>
    </>
  )
}

export default Products
