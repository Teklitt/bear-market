import React from 'react'
import '../global.css'

const CategoryCard = ({ category }) => {
  return (
    <div className="Category-card">
      <h3>{category.name}</h3>
      <p>{category.description}</p>
    </div>
  )
}

export default CategoryCard
