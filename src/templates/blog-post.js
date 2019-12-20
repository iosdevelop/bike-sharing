import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

export default ({ data }) => {
    const post = data.nodeBicycle
    return (
        <Layout>

            <div>
                <h1>{ post.title }</h1>
                <small><em>{ Date(post.created) }</em></small>
                <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}>
                    <div>{ post.relationships.field_bicycle_image.map(
                        bicycleImage => (
                            <div key={bicycleImage.id}>
                                <Img
                                    fluid={bicycleImage.localFile.childImageSharp.fluid}
                                    alt={bicycleImage.alt}
                                    title={bicycleImage.title}
                                />
                            </div>
                        )

                    )} </div>
                </div>
            </div>
            <h2>Features</h2>
            <ul>{post.relationships.field_bicycle_features.map(
                features => (
                    <li key={features.id}>
                        {features.name}

                    </li>
                )
            )}</ul>
            <Link to="/about">About</Link>
        </Layout>
    )
}

export const query = graphql`
  query($id: String!) {
    nodeBicycle(id: { eq: $id }) {
        title
        created
        relationships {
          field_bicycle_image {
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
          field_bicycle_features {
            id
            name
          }
        }
    }
  }
`