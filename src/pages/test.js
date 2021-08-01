import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./about.module.css"
import TestImage from "../components/testimage"
import TestImage2 from "../components/testimage2"

const TestPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Test Page"
        description="Information about the site."
        image="/logo.png"
        pathname="/about"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>

         <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" />
         

        <h1 className={style.heading}>Contact Us</h1>
        <div>
          
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

export default TestPage

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
    footerImage: file(
        relativePath: { eq: "night-background.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1184) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sideImage: file(relativePath: {eq: "night-background.jpg"}) {
        childImageSharp {
            fixed(width: 300,
                duotone: {
                    highlight: "#f00e2e",
                    shadow: "#192550"
                  }) {
              ...GatsbyImageSharpFixed    
            }
        }
      }

    
  }
`
