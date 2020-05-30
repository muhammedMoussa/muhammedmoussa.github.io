import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello, </h1>
      <h2> I'm Muhammed Moussa, a frontend engineer</h2>
      <p>Need a service? <Link className="text-indigo-500" to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage
