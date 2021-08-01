import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Page not found</h1>
      
      <p>That page doesn&#39;t exist.  Sorry for the inconveniece</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

