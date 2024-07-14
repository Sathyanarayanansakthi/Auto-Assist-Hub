import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import AdminLandingPage from '../component/AdminLandingPage'

const AdminPortal = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <AdminLandingPage/>
        <Footer/>
    </React.Fragment>
  )
}

export default AdminPortal
