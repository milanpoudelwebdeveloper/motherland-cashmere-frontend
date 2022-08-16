import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.imageSection}>
        <img src="/images/about-us.jpg" alt="about-us" />
      </div>
      <div className={styles.description}>
        <h1>Namaste</h1>
        <p>
          <b>Motherland Cashmere warmly welcomes you</b>We are a Nepalese brand
          of knitwear for women and men with over 25 years of experience and
          excellence. Since its humble beginnings, Motherland Cashmere have
          served many national and international clients. We put the client at
          the heart of everything we do and it has been our clients who have
          challenged us every step of the way to stretch ourselves and to
          innovate and to adapt to solve the problems they’ve presented us with.
          We make finest handmade Cashmere products around our clients to ensure
          that we deliver the best possible service every time.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
