import { NextPage } from 'next'
import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import CategorySection from '../components/CategorySection/CategorySection'
import Featured from '../components/Featured/Featured'
import Footer from '../components/Footer/Footer'
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
      <AboutUs />
      <Featured />
      <Footer />
    </>
  )
}

export default Home
