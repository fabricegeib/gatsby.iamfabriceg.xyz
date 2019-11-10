import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
    query($cardSlug: String!) {
        heroesJson(fields: {cardSlug: {eq: $cardSlug}}) {
            id
            name
            nameFr
            rarity
            class
            classPerks {
                perk
                text
            }
            teamPerkUnlock
            teamPerkUnlockText
            standardPerk
            commanderPerk
            abilities {
                title
                text
                cost
                cooldown
            }
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

            <h3 className="hero__title">{props.data.heroesJson.name}</h3>
            <h5 className="hero__titleFr">{props.data.heroesJson.nameFr}</h5>


            <div className="hero-container">
                <div className="card">
                    <Image
                        fluid={props.data.heroesJson.image.childImageSharp.fluid}
                        alt={props.data.heroesJson.name}
                    />
                    <div className="card__overlay">
                    {props.data && <p>{props.data.heroesJson.name}</p>}
                    </div>
                    <div className="card__bottom">
                        <p>{props.data.heroesJson.class}</p>
                    </div>
                </div>

                <div className="hero-informations">
                    <h3 className="hero__class">{props.data.heroesJson.class} | <span>{props.data.heroesJson.rarity}</span></h3>
                    
                    <h4 className="hero__ability">Abilities</h4>
                    {props.data && <p>{props.data.heroesJson.abilities[0].title}</p>}

                    <h4 className="hero__ability">Standard Perk</h4>
                    <p>{props.data.heroesJson.standardPerk}</p>
                    <h4 className="hero__ability">Commander Perk</h4>
                    <p>{props.data.heroesJson.commanderPerk}</p>


                    <p>{props.data.heroesJson.citation}</p>
                </div>
            </div>
        </Layout>
    )
}

export default CardTemplate
