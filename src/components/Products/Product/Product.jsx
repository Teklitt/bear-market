import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Product = ({ product }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: '100%',
        }}
      >
        <CardMedia
          sx={{
            height: 0,
            paddingTop: '56.25%', // 16:9
          }}
          image={product.image}
          title={product.name}
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton aria-label="Add to Cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Product
