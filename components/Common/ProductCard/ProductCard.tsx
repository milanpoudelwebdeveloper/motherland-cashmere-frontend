import React from 'react'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { BiMessage } from 'react-icons/bi'
import styles from './ProductCard.module.css'

const ProductCard: React.FC<{ product: IProduct }> = ({
  product: { type, title, price, image },
}) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.overlay}>
        <img src={image} alt="productImage" className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <span>{type}</span>
        <p>{title}</p>
        <h1>${price}</h1>
      </div>
      <div className={styles.overlayIcons}>
        <div className={styles.icon}>
          <AiOutlineHeart size={20} />
        </div>
        <div className={styles.icon}>
          <AiOutlineSearch size={20} />
        </div>
        <div className={styles.icon}>
          <BiMessage size={20} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
