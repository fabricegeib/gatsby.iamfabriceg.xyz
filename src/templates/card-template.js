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
          rarity
          citation
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

    console.log(props.data)

    return (
        <Layout>
        <SEO title="Fortnite Save The World - Heroes Card" />
            <p>
                <Link to="/fortnite/save-the-world/heroes">Fortnite > Save The World > Heroes</Link>
            </p>

            <h3>{props.data.heroesJson.name}</h3>
            <h5>{props.data.heroesJson.class}</h5>

            <div className="heroe-container">
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

                <div className="xxx">
                    <p>{props.data.heroesJson.rarity}</p>

                    <p>{props.data.heroesJson.citation}</p>
                </div>
            </div>
        </Layout>
    )
}

export default CardTemplate
