import React from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/main.scss'

const Layout = props => {
  return (
    <>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          { /*<Navbar /> */}
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
