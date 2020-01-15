import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ( { data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>We built something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/*<ul> {data.allNodeBicycle.edges.map(*/}
      {/*    document => (*/}
      {/*        <li key={document.node.id}>*/}
      {/*            <h2>*/}
      {/*                <Link to={`/${document.node.id}`}>*/}
      {/*                    {document.node.id}*/}
      {/*                </Link>*/}
      {/*            </h2>*/}

      {/*        </li>*/}
      {/*    )*/}
      {/*)}</ul>*/}

    </div>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
// export const pageQuery = graphql`
//   query IndexQuery {
//         allNodeBicycle {
//         edges {
//           node {
//             title
//             relationships {
//               field_bicycle_features {
//                 name
//               }
//             }
//           }
//         }
//       }
//   }
//   `