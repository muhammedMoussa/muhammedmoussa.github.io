import { useStaticQuery } from "gatsby"
import React from "react"
import Card from "../components/Card"
import Head from "../components/head"
import Layout from "../components/layout"

function GalleryPage() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projectsData {
            title
            description
            imgSrc
            href
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Gallery" />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase projects from different industries including open source
            projects.
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {data.site.siteMetadata.projectsData.map(d => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage
