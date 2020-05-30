import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1 className="text-4xl font-bold ">About Me</h1>
      <p className="my-4">I currently working as a full-time frontend engineer at <a href="http://hadafsolutions.net/" target="_blank" rel="noopener noreferrer" className="text-indigo-500">Hadaf Solutions</a>.</p>
      <p><Link to="/contact">want to work with me? reach out.</Link></p>
    </Layout>
  )
}

export default AboutPage
