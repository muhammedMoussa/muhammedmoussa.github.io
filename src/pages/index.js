import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import StackOverflowFlair from '../components/stackOverflowFlair'

// @TODO: REFACTOR SOCIAL ICONS TO BE COMPONENT
// @TODO: REPLACE GATSBY FAVICON

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          quote,
          summary,
          intro,
          social {
            url,
            icon
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <h1 className="font-bold mt-4 text-3xl">{data.site.siteMetadata.intro}</h1>
      <div className="tracking-wide leading-loose my-2 antialiased sm:subpixel-antialiased md:antialiased lg:subpixel-antialiased xl:antialiased">
        <p className="font-medium mb-4">{data.site.siteMetadata.quote}</p>
        <p className="mb-2 font-medium">{data.site.siteMetadata.summary}</p>
      </div>

      <h2 className="mt-10 display-block">Find Me</h2>
      <div className="inline-inherit mt-2">
      {data.site.siteMetadata.social.map((platform, index) => {
        return (
          <a             
            key={index} 
            className={platform.icon + ' mr-2 p-2 text-2xl hover:text-blue-500 transition ease-in-out duration-700'} 
            href={platform.url} 
            target="_blank"
          ></a>
        )
      })}
    </div>

    <h2 className="mt-8 mb-1">Stack Overflow Flair</h2>
    <StackOverflowFlair />
    <p className="mt-12">Need a service or want to work with me? 
      <a className="cursor-pointer text-blue-600" href="mailto:muhammedmoussa@hotmail.com"> reach out</a>.
    </p>

    </Layout>
  )
}

export default IndexPage
