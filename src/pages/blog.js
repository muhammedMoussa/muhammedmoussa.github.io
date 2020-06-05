import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        filter: {node_locale: {eq: "en-US"}}   
        sort: {
          fields: slug,
          order: ASC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  
  // @TODO: HANDLE HERO IMAGE IN CARD
  return (
    <Layout>
      <Head title="Blog" />
      <h1 className="font-bold mt-4 text-3xl">Latest Posts</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <Link to={`/blog/${edge.node.slug}`}  key={index}>
              <div className="max-w-sm my-2 rounded overflow-hidden shadow-lg focus:outline-none focus:shadow-outline"> 
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{edge.node.title}</div>
                  <p className="text-gray-600">{edge.node.publishedDate}</p>
                </div> 
              </div>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage