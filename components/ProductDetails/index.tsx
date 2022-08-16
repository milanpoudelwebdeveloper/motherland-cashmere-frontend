import React from 'react'
import DescriptionSection from './DescriptionSection'
import PhotoSection from './PhotoSection'
import styles from './ProductDetails.module.css'

//Import swiper styles

const ProductDetails = () => {
  return (
    <div className={styles.productDetails}>
      <div className={styles.photoSection}>
        <PhotoSection />
      </div>
      <div className={styles.description}>
        <DescriptionSection />
      </div>
    </div>
  )
}

export default ProductDetails
