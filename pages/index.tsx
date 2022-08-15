import { NextPage } from 'next'
import React from 'react'
import CategorySection from '../components/CategorySection/CategorySection'
import NavBar from '../components/NavBar/NavBar'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import PhotoSection from '../components/PhotoSection/PhotoSection'

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <PhotoSection />
      <CategorySection />
      <NewArrivals />
    </>
  )
}

export default Home
