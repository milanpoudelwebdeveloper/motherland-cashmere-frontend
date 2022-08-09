import { NextPage } from 'next'
import React from 'react'
import CategorySection from '../components/CategorySection/CategorySection'
import NavBar from '../components/NavBar/NavBar'
import PhotoSection from '../components/PhotoSection/PhotoSection'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <PhotoSection />
      <CategorySection />
    </div>
  )
}

export default Home
