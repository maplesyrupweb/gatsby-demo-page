import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./about.module.css"




const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About this website"
        description="Information about the site."
        image="/logo.png"
        pathname="/about"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="About this website" />
        <h1 className={style.heading}>About this website</h1>
        <div>
          <figure className={style.image}>
            <Img
              fixed={data.bodyImage.childImageSharp.fixed}
              alt="About this website"
            />
          </figure>

          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          

      
      
      
        </div>

      

      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "night-background.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bodyImage: file(relativePath: { eq: "night-background.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
