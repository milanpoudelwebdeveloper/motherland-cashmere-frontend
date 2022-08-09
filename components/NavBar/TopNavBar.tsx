import React from 'react'
import { topNavItems } from '../../constants/navBarItems'
import styles from './NavBar.module.css'

const TopNavBar = () => {
  return (
    <div className={styles.topNavBar}>
      <div className={styles.topNav}>
        <p>Order Online Or Call Us: (001) 2222-55555</p>
        <ul className={styles.topNavItems}>
          {topNavItems.map((item) => (
            <li key={item} className={styles.topNavItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopNavBar
