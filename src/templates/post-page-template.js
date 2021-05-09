import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import Head from "../components/head"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`

export default ({ data }) => {
  const { frontmatter, body } = data.mdx
  let disqusConfig = {
    identifier: frontmatter.slug,
    title: frontmatter.title,
  }
  return (
    <Layout>
      <Head title={frontmatter.title} />
      <CommentCount config={disqusConfig} placeholder={" "} />
      <h1>{frontmatter.title}</h1>

      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      <Disqus config={disqusConfig} />
    </Layout>
  )
}
