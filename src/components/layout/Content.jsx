import React from 'react'
import "../../assets/responsive/ContentRes.css"
import HeroSection from '../sections/HeroSection'
import AboutUs from '../sections/AboutUs'
import Features from '../sections/Features'

const Content = () => {
  return (
    <div id='Content'>
      <HeroSection />
      <AboutUs />
      <Features />

    </div>
  )
}

export default Content