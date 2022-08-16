import React from 'react'
import styles from './ProductDetails.module.css'

const DescriptionSection = () => {
  return (
    <div className={styles.productDescription}>
      <p className={styles.productType}>HOME/T Shirt</p>
      <h1 className={styles.productTitle}>Boy TShirt</h1>
      <h3 className={styles.productPrice}>$900</h3>
      <h2>Product Detail</h2>
      <p className={styles.productDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
        delectus nulla voluptates nesciunt quidem laudantium, quisquam voluptas
        facilis dicta in explicabo, laboriosam ipsam suscipit!
      </p>
    </div>
  )
}

export default DescriptionSection
