import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"
import style from "./events.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Events"
        description="Current and past events"
        image="/logo.png"
        pathname="/events"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Upcoming Events" />
        <h1 className={style.heading}>Events</h1>
        <div>
          <p>Our list of upcoming events</p>
        </div>
      </section>
      <section >
        <div className={style.wrapper}>
          <h2 className={style.wrapper}>Future events</h2>
          <ul className={style.wrapper}>
            {data.futureEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
        </section>

        <section className={style.wrapper}>
        <div className={style.wrapper}>
        <p className={style.wrapper}>Our list of past events</p>
          <h2 className={style.wrapper}>Past events</h2>
          <ul className={style.wrapper}>
            {data.pastEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
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
    futureEvents: allEvent(
      filter: { collection: { eq: "future" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
        
      }
    }
    pastEvents: allEvent(
      filter: { collection: { eq: "past" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
        
      }
    }
  }
`
