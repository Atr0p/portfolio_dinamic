import React from 'react'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import '../styles/main.scss'

const Layout = props => {
  return (
    <>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
