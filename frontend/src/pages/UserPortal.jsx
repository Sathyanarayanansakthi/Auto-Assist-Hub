import React from 'react'
import UserLandingPage from "../component/UserLandingPage"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const UserPortal = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <UserLandingPage/>
        <Footer/>
    </React.Fragment>
  )
}

export default UserPortal
