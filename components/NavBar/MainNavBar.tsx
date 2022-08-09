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
        <ul className="flex align-middle">
          {navItems.map(({ title, link }) => (
            <li
              key={title}
              className="px-4 text-lg cursor-pointer hover:text-green"
            >
              <Link href={link} passHref>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 align-middle">
          <div className="cursor-pointer">
            <AiOutlineUser size={20} />
          </div>
          <div className="cursor-pointer">
            <AiOutlineSearch size={20} />
          </div>
          <div className="cursor-pointer">
            <BsHeart size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNavBar
