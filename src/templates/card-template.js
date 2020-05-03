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
            <div className="fortnite">
                <div className="container">
                <p>
                    <Link to="/fortnite/save-the-world/heroes">Fortnite > Save The World > Heroes</Link>
                </p>

                <div className="hero_page">

                    <div className="hero-container">
                        
                        <div className="hero-left">
                            <h3>{props.data.heroesJson.rarity} | <span className="hero__class">{props.data.heroesJson.class}</span></h3>

                            <h3 className="hero__title">{props.data.heroesJson.name}</h3>
                            
                            <div className="heroCard" data-rarity={props.data.heroesJson.rarity}>
                                <Image
                                    fluid={props.data.heroesJson.image.childImageSharp.fluid}
                                    alt={props.data.heroesJson.name}
                                />
                                <div className="heroCard__overlay">
                                    <div data-class={props.data.heroesJson.class}></div>
                                    {/* <p className="heroCard__class">{props.data.heroesJson.class}</p> */}
                                </div>
                                <div className="heroCard__bottom">
                                    {/* <p className="hero__title">{props.data.heroesJson.name}</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="hero-informations">
                            <h4 className="hero__ability">Avantage Standard</h4>
                            <p>{props.data.heroesJson.standardPerk}</p>

                            <h4 className="hero__ability">Avantage de Commandant</h4>
                            <p>{props.data.heroesJson.commanderPerk}</p>

                            <h4 className="hero__ability">Avantage de Classe</h4>
                                <div className="">
                                    <div data-class={props.data.heroesJson.classPerks[0].perk}></div>
                                    <p>{props.data.heroesJson.classPerks[0].perk}</p>
                                </div>
                                <div className="">
                                    <p>{props.data.heroesJson.classPerks[0].text}</p>   
                                </div>

                            <p>{props.data.heroesJson.classPerks[1].perk}</p>
                            <p>{props.data.heroesJson.classPerks[1].text}</p>


                            <h4 className="hero__ability">Compétences</h4>
                            <div>
                                {props.data && <p>{props.data.heroesJson.abilities[0].title}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[0].cost}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[0].cooldown}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[0].text}</p>}
                            </div>

                            <div>
                                {props.data && <p>{props.data.heroesJson.abilities[1].title}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[1].cost}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[1].cooldown}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[1].text}</p>}
                            </div>
                            
                            <div>
                                {props.data && <p>{props.data.heroesJson.abilities[2].title}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[2].cost}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[2].cooldown}</p>}
                                {props.data && <p>{props.data.heroesJson.abilities[2].text}</p>}
                            </div>

                            <p>{props.data.heroesJson.citation} - <i>{props.data.heroesJson.name}</i></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default CardTemplate
