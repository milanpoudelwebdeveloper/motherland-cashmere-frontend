import React from 'react'
import styles from './Footer.module.css'
import { footerMidItems, footerMidItems2 } from '../../constants/footer'
import NewsLetter from './NewsLetter'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerItem}>
          <h1>Motherland Cashmere</h1>
          <p>
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
          <img src="/images/payment.png" alt="payment" />
        </div>

        <div className={styles.footerMiddle}>
          <div>
            <h1>SHOPPING</h1>
            {footerMidItems.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <h1>SHOPPING</h1>
            {footerMidItems2.map((item, index) => (
              <p key={index}> {item}</p>
            ))}
          </div>
        </div>

        <div className={styles.footerItem}>
          <NewsLetter />
        </div>
      </div>
      <hr />
      <div className={styles.copyRight}>
        <p>Copyright © 2021 All rights reserved | Motherland Cashmere </p>
      </div>
    </div>
  )
}

export default Footer
