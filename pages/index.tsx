import { NextPage } from 'next'
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import PhotoSection from '../components/PhotoSection/PhotoSection'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <PhotoSection />
    </div>
  )
}

export default Home
