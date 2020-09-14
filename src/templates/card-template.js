import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
    query($cardSlug: String!) {
        heroesJson(fields: {cardSlug: {eq: $cardSlug}}) {
            id
            type
            name
            nameFr
            rarity
            class
            perk {
                commander
                commanderText
                standard
                standardText
            }
            classPerks {
                title
                text
            }
            collectionBook {
                bloc
                collect
                group
                own
                subgroup
            }
            abilities {
                img
                title
                text
                cost
                cooldown
            }
            citation
            teamPerkUnlock
            teamPerkUnlockText
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
                <p className="breadcrumb">
                    <Link to="/fortnite">Fortnite</Link> > <Link to="/fortnite/save-the-world">Save The World</Link> > <Link to="/fortnite/save-the-world/heroes">Heroes</Link>
                </p>

                <div className="hero_page">

                    <div className="hero-container">
                        
                        <div className="hero-left">
                            <div className="">
                                <h3>{props.data.heroesJson.rarity} | <span className="hero__class">{props.data.heroesJson.type}</span></h3>

                                <h3 className="hero__title">{props.data.heroesJson.name}</h3>
                                <h3 className="">{props.data.heroesJson.nameFr}</h3>

                                <p className="">{props.data.heroesJson.class}</p>
                            </div>

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

                            <div className="collection">
                                <p>own : {props.data.heroesJson.collectionBook.own}</p>
                                <p>collect : {props.data.heroesJson.collectionBook.collect}</p>
                                {/* collectionBook.group
                                collectionBook.subgroup
                                collectionBook.bloc */}
                            </div>
                        </div>

                        <div className="hero-informations">
                            
                            <div className="hero-informations__block">
                                <h3 className="hero__ability">Standard Perk</h3>
                                {/* <h4 className="hero__ability">Avantage Standard</h4> */}
                                
                                <div className="hero-informations__subblock">
                                    <div data-perk={props.data.heroesJson.perk.standard}></div>

                                    <div>
                                        <h4 className="hero-informations__block__title">{props.data.heroesJson.perk.standard}</h4>
                                        <p>{props.data.heroesJson.perk.standardText}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-informations__block">
                                <h3 className="hero__ability">Commander Perk</h3>
                                {/* <h4 className="hero__ability">Avantage de Commandant</h4> */}

                                <h4 className="hero-informations__block__title">{props.data.heroesJson.perk.commander}</h4>
                                <p>{props.data.heroesJson.perk.commanderText}</p>
                            </div>

                            <div className="hero-informations__block">
                                <h3 className="hero__ability">Class Perks</h3>
                                {/* <h4 className="hero__ability">Avantage de Classe</h4> */}

                                <div className="hero-informations__subblock">
                                    <div data-class={props.data.heroesJson.classPerks[0].title}></div>
                                    <p>{props.data.heroesJson.classPerks[0].text}</p>   
                                </div>

                                <div className="hero-informations__subblock">
                                    <div data-class={props.data.heroesJson.classPerks[1].title}></div>
                                    <p>{props.data.heroesJson.classPerks[1].text}</p>   
                                </div>
                            </div>

                            <div className="hero-informations__block">
                                <h3 className="hero__ability">Compétences</h3>
                                <div className="hero-informations__subblock">
                                    <div data-ability={props.data.heroesJson.abilities[0].img}></div>

                                    <div>
                                        {props.data && <h4>{props.data.heroesJson.abilities[0].title}</h4>}
                                        {props.data && <p>{props.data.heroesJson.abilities[0].cost}</p>}
                                        {props.data && <p>{props.data.heroesJson.abilities[0].cooldown}</p>}
                                        {props.data && <p>{props.data.heroesJson.abilities[0].text}</p>}
                                    </div>
                                </div>

                                <div className="hero-informations__subblock">
                                    <div data-ability={props.data.heroesJson.abilities[1].img}></div>

                                    <div>
                                        {props.data && <h4>{props.data.heroesJson.abilities[1].title}</h4>}
                                        {props.data && <p>{props.data.heroesJson.abilities[1].cost}</p>}
                                        {props.data && <p>{props.data.heroesJson.abilities[1].cooldown}</p>}
                                        {props.data && <p>{props.data.heroesJson.abilities[1].text}</p>}
                                    </div>
                                </div>
                                
                                <div className="hero-informations__subblock">
                                    <div data-ability={props.data.heroesJson.abilities[2].img}></div>

                                    <div>
                                        {props.data && <h4>{props.data.heroesJson.abilities[2].title}</h4>}
                                        {props.data && <p>{props.data.heroesJson.abilities[2].cost}</p>}
                                        {props.data && <p>{props.data.heroesJson.abilities[2].cooldown}</p>}
                                        {props.data && <p>{props.data.heroesJson.abilities[2].text}</p>}
                                    </div>
                                </div>
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
