import React from 'react'
import MainNavBar from './MainNavBar'
import TopNavBar from './TopNavBar'

const NavBar = () => {
  return (
    <header className="relative overflow-x-hidden">
      <TopNavBar />
      <MainNavBar />
    </header>
  )
}

export default NavBar
