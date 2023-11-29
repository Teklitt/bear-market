import React from 'react'
import '../global.css'

const ItemCard = ({ name, price }) => {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  )
}

export default ItemCard
