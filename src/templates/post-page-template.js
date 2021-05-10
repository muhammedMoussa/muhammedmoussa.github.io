import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import Head from "../components/head"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

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
      <h1 className="postTitle">{frontmatter.title}</h1>
      <p className="postDate">{frontmatter.date}</p>
      <hr className="mb-4"/>
      <MDXRenderer>{body}</MDXRenderer>
      <Disqus config={disqusConfig} />
    </Layout>
  )
}
