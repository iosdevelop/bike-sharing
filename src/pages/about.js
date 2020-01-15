import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about-css-modules.module.css"
import Header from "../components/header"
const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1>Bicycle Sharing</h1>
      <div style={{ color: `green` }}>
          <p>This application is curate set of the best recipes around.</p>
          <div>{data.allNodeBicycle.edges.map(
              document => (
                  <div key={document.node.id}>
                      <h2>
                          <Link to={`/${document.node.title}`}>
                              {document.node.title}
                          </Link>
                      </h2>
                      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, width: `100%` }}>
                          <div>{ document.node.relationships.field_bicycle_image.map(
                              bicycleImage => (
                                  <div key={bicycleImage.id}>
                                      <Img
                                          fluid={bicycleImage.localFile.childImageSharp.fluid}
                                          alt={bicycleImage.alt}
                                          title={bicycleImage.title}
                                      />
                                  </div>
                              )
                          ) } </div>
                      </div>
                      <ul>{document.node.relationships.field_bicycle_features.map(
                          features => (
                              <li key={features.id}>
                                  {features.name}

                              </li>
                          )
                      )}</ul>
                  </div>
              )
          )}</div>
      </div>

    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
export const pageQuery = graphql`  
  query IndexQuery {
   allNodeBicycle {
        edges {
          node {
            title
            id
            relationships {
              field_bicycle_features {
                name
                id
              }
              field_bicycle_image {
                id
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
            created(fromNow: true)
            field_bicycle_image {
              alt
              title
            }
          }
        }
      }
      nodeBicycle {
        title
        created
        relationships {
          field_bicycle_image {
            localFile {
              childImageSharp {
                id
              }
            }
          }
        }
      }
   }
`