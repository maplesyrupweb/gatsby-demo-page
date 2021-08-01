import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"
import { Link } from "gatsby"

const DemoWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 2rem 1rem;
  border-radius: 1rem;
  background: #ffcc00;
  box-shadow: 1rem 1rem 3rem hsla(0, 0%, 100%, 0.2), -1rem -1rem 3rem #ffffff;
`
const PageHeader = styled.h1`
  text-align: center;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="My Project 325"
        description="A Gatsby site to be proud of."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        
        <div>
        <Img
          className={style.headerImage}
          fluid={data.headerImage.childImageSharp.fluid}
          alt="Robots"
        />
        </div>
        

        <PageHeader className={style.heading}>
          Welcome to my Gatsby site
        </PageHeader>
          
          <div>
          <p>This is my first website using Gatsby.  This is why I am using it.</p>
            <ul>
              <li>It is lightning fast</li>
              <li>It integrates with CMS such as WordPress and others</li>
              <li>It can be deployed as a progressive web app</li>
              <li>It has a very organized file structure</li>
              <li>It is based on React</li>
              <li>It's good to be able to explore new tools in front end design</li>
            </ul>
            <p>
            Please explore the rest of my website!
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
          
        
      </section>
    </Layout>
  )
}

export default IndexPage

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
  }
`
