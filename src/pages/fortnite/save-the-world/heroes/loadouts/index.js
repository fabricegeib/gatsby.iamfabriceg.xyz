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
            <div className="container">
                <h1>Loadouts</h1>

                <p>loadout 1</p>
                <p>loadout 2</p>
                <p>loadout 3</p>
                <p>loadout 1</p>
                <p>loadout 5</p>
            </div>
        </Layout>
    )
}

export default HeroesLoadoutsPage
