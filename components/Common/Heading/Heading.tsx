import React from 'react'
import styles from './Heading.module.css'

type props = {
  title: string
  description: string
}

const Heading = ({ title, description }: props) => {
  return (
    <div className={styles.headingTitle}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Heading
