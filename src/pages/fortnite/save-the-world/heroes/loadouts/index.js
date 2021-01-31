import React from "react"

import Layout from "../../../../../components/layout"

// export const query = graphql`
//   query {
//     allLoadoutsJson {
//       edges {
//         node {
//           name
//           rarity
//           id
//           class
//           type
//           image {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

const HeroesLoadoutsPage = ({ data }) => {


    return (
        <Layout>
            <h1>Loadouts</h1>
        </Layout>
    )
}

export default HeroesLoadoutsPage
