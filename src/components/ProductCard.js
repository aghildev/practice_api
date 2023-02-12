import React from 'react'
import styles from './styles/ProductCard.module.css'

function ProductCard({title,price,images,rating}) {
  return (
    <div className = {styles.productCardContainer}>
        <h1>{title}</h1>
        <img src={images[0]} alt="" />
        <h3>Rs:{price*1000}/-</h3>
        <h3>Rating:{rating.toFixed()}/5</h3>
    </div>
  )
}

export default ProductCard;