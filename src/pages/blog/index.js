import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import Head from "../../components/head"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          slug
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
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
        {data.allMdx.nodes.map(({ index, slug, excerpt, frontmatter, id }) => {
          return (
            <Link to={slug} key={id}>
              <div>aaaaaa{id}</div>
              <div className="max-w-sm my-2 rounded overflow-hidden shadow-lg focus:outline-none focus:shadow-outline">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {frontmatter.title}
                  </div>
                  <p className="text-gray-600">{frontmatter.date}</p>
                  <p>{excerpt}</p>
                  <p>to={slug}</p>
                </div>
              </div>
              //{" "}
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
