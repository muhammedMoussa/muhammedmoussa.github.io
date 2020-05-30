import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <p>The best way to reach me via <a href="https://twitter.com/muhammedMoussa" target="_blank" rel="noopener noreferrer" className="text-indigo-500">@muhammedMoussa</a> on twitter!</p>
      <p>Rest of social links will be up here...</p>
    </Layout>
  )
}

export default ContactPage
