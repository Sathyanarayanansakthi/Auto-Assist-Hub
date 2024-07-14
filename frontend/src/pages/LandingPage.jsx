import React from 'react'
import Navbar from '../component/Navbar'
import LandingPageWebsite from '../component/LandingPageContent'
import Footer from '../component/Footer'

const LandingPage = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <LandingPageWebsite/>
        <Footer/>
    </React.Fragment>
  )
}

export default LandingPage
