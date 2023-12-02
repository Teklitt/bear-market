import React from 'react'
import '../../../../src/css/Global.css'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Card
        sx={{
          maxWidth: '100%',
        }}
      >
        <CardMedia
          sx={{
            height: '100px',
            width: '100%',
            objectFit: 'cover',
            paddingTop: '56.25%', // 16:9
          }}
          image={product.image.url}
          title={product.name}
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* //Product name */}
          <div>
            <Typography
              variant="h7"
              gutterBottom
              className="product-card__name"
            >
              {product.name}
            </Typography>
            {/* //product price */}
            <Typography variant="h5" className="product-card__price">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          {/* product description */}
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            className="product-card__description"
          />
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Product
