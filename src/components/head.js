import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


const Head = (props) => {

  return (
    // @TODO: Dynamic App
    <Helmet title={`${props.title} | App`} />
  )

}

export default Head
