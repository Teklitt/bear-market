import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material'
import '../../../src/css/Global.css'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

const Cart = ({ cart }) => {
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some!
    </Typography>
  )
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div>
        <div className="cardDetails">
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
        </div>
        <div>
          <Button
            className="emptyButton"
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className="checkOutButton"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  )
  if (!cart.line_items)
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  return (
    <Container>
      <div className="cart-container">
        <Typography className="cart-title" variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  )
}

export default Cart
