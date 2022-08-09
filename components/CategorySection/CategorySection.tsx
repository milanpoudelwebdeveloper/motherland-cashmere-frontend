import React from 'react'
import { categoryItems } from '../../constants/categorySection'
import styles from './CategorySection.module.css'

const CategorySection = () => {
  return (
    <section className={styles.category}>
      <div className={styles.categoryItems}>
        {categoryItems.map(({ id, name, image }) => (
          <div key={id} className={styles.categoryItem}>
            <img src={image} className={styles.image} />
            <div className={styles.cName}>
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
