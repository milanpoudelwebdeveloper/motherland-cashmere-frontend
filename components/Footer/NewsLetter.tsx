import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import styles from './Footer.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <h4>Newsletter</h4>
      <p>
        Be the first to know about new arrivals, look books, sales & promos!
      </p>
      <div className={styles.inputContainer}>
        <input type="email" placeholder="Your email" />
        <AiOutlineMail />
      </div>
    </div>
  )
}

export default NewsLetter
