// import React from "react"
// import { Link, graphql } from "gatsby"
// import Image from "gatsby-image"

// const margin = {
//   margin: '24px auto',
//   width: '98%',
// }

// export const query = graphql `
//     query ($slug : String!) {
//         heroesJson(slug: { eq: $slug}) {
//             name
//             class
//             image {
//                 childImageSharp {
//                     fluid {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//         }
//     }
// `;

// const HeroesPage = ({ data }) => {
//   const heroes = data.heroesJson;

//   return (
//       <div className="card">
//         {data.heroesJson.edges.map(({ node }, index) => (
//           <div key={index} className="card">
//             <Image fluid={heroesJson.image.childImageSharp.fluid} alt={heroesJson.name} />
//             <p>{heroesJson.name}</p>
//             <p>{heroesJson.class}</p>
//           </div>
//         ))}
//       </div>
//   )
// };

// export default HeroesPage;