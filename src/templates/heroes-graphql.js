// import React from 'react';
// import { Link, graphql } from 'gatsby'
// import Image from 'gatsby-image'

// export const query = graphql `
//     query ($slug : String!) {
//         heroesJson(slug: { eq: $slug}) {
//             id
//             class
//             name
//             slug
//             image {
//               childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//         }
//     }
// `;

// const Heroes = ({ data }) => {
//     const heroes = data.heroesJson;

//     return (
//         <div className="container--full">
//             <p><Link to="/fortnite/save-the-world">Go back to Save The World</Link></p>
//             <div className="card">
//                 <p>{heroes.name}</p>
                
//                 <Image
//                     fluid={heroes.image.childImageSharp.fluid}
//                     alt={heroes.name}
//                 />
//                 <p>{heroes.class}</p>
//             </div>
//         </div>
//     )
// };

// export default Heroes;