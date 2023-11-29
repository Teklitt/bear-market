// ProductPage.js

import React from 'react'
import ItemCard from '../../components/ItemCard'
import './productPage.css'

const ProductPage = () => {
  // Dummy data for items (replace with your actual data)
  const items = [
    { id: 1, name: 'Product 1', price: '$19.99' },
    { id: 2, name: 'Product 2', price: '$29.99' },
    { id: 3, name: 'Product 3', price: '$39.99' },
  ]

  return (
    <div className="product-page">
      <h2>Product Page</h2>
      <div className="item-list">
        {items.map((item) => (
          <ItemCard key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
