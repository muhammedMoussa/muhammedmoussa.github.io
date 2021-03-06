import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'

const Layout = (props) => {
  return (
    <div 
      className="min-h-screen max-w-4xl p-5 mx-auto flex flex-col"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--textNormal)'
      }}
    >
      <div className="flex-grow">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
