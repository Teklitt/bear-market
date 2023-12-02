import React from 'react'
import Grid from '@mui/material/Grid'
import Product from './Product/Product'

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes',
    price: '$10',
    image:
      'https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Book',
    description: 'Used Computer Science Book',
    price: '$10',
    image:
      'https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Furniture',
    description: 'Rocking Chairs',
    price: '$15',
    image:
      'https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
