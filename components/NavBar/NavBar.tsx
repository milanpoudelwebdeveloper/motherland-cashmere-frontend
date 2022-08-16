import React from 'react'
import MainNavBar from './MainNavBar'
import TopNavBar from './TopNavBar'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <TopNavBar />
      <MainNavBar />
    </header>
  )
}

export default NavBar
