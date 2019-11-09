import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
    query($cardSlug: String!) {
        heroesJson(fields: {cardSlug: {eq: $cardSlug}}) {
          id
          class
          name
          slug
          fields {
            cardSlug
          }
          image {
            childImageSharp {
              fluid {
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
`

const CardTemplate = (props) => {

    return (
        <Layout>
        <SEO title="Fortnite Save The World - Heroes Card" />
            <p>
                <Link to="/fortnite/save-the-world/heroes">Fortnite > Save The World > Heroes</Link>
            </p>
            <h3>Card</h3>
            <p>{props.data.heroesJson.name}</p>

            <div className="card">
                <Image
                    fluid={props.data.heroesJson.image.childImageSharp.fluid}
                    alt={props.data.heroesJson.name}
                />
                <div className="card__overlay">
                    <p>{props.data.heroesJson.name}</p>
                </div>
                <div className="card__bottom">
                    <p>{props.data.heroesJson.class}</p>
                </div>
            </div>
            
        </Layout>
    )
}

export default CardTemplate
