import Link from 'next/link'
import React from 'react'
import { navItems } from '../../constants/navBarItems'
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { BsHeart } from 'react-icons/bs'
import styles from './NavBar.module.css'

const MainNavBar = () => {
  return (
    <div className={styles.mainNavBar}>
      <div className={styles.mainNav}>
        <Link href="/" passHref>
          <h1>Motherland Cashmere</h1>
        </Link>
        <ul className={styles.mainNavItems}>
          {navItems.map(({ title, link }) => (
            <li key={title} className={styles.mainNavItem}>
              <Link href={link} passHref>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.rightIcons}>
          <div className={styles.rightIcon}>
            <AiOutlineUser size={20} />
          </div>
          <div className={styles.rightIcon}>
            <AiOutlineSearch size={20} />
          </div>
          <div className={styles.rightIcon}>
            <BsHeart size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNavBar
