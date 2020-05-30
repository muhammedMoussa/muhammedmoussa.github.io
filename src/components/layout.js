import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'

const Layout = (props) => {
  return (
    <div className="min-h-screen max-w-3xl p-5 mx-auto flex flex-col">
      <div className="flex-grow">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
