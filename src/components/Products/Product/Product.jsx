import React from 'react'
import '../../../../src/css/Global.css'
import { CardMedia, CardActions, IconButton } from '@mui/material'
import AspectRatio from '@mui/joy/AspectRatio'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Chip from '@mui/joy/Chip'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img src={product.image.url} alt={product.name} loading="lazy" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">
            {product.description
              ? product.description
              : 'No description available'}
          </Typography>

          <Link
            href="#product-card"
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutwardIcon />}
          >
            {product.name}
          </Link>
          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: 'xl' }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography level="body-sm">
            (<b>{product.inventory.available}</b> left in stock!)
          </Typography>
        </CardContent>
        {/* <div>
          <Typography variant="h7" gutterBottom className="product-card__name">
            {product.name}
          </Typography> */}
        {/* //product price */}
        {/* <Typography variant="h5" className="product-card__price">
            {product.price.formatted_with_symbol}
          </Typography>
        </div> */}

        {/* product description */}
        {/* <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          className="product-card__description"
          component="p"
        /> */}
        <CardOverflow>
          <Button
            variant="solid"
            color="danger"
            size="lg"
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            Add to cart
          </Button>
        </CardOverflow>
        {/* <CardActions
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
        </CardActions> */}
      </Card>
    </div>
  )
}

export default Product
