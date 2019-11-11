import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"

export const query = graphql `
    query {
        allHeroesJson {
            edges {
                    node {
                        name
                        id
                        class
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        fields {
                            cardSlug
                        }
                    }
                }
            totalCount
        }
    }
`

const HeroesPage = ({ data }) => {
    // const heroes = data.allHeroesJson;

    console.log(data)

    return (
        <Layout>
        <SEO title="Fortnite Save The World - Heroes" />
        
            <p>
                <Link to="/fortnite/save-the-world">Fortnite > Save The World</Link>
            </p>

            <h3>Heroes ({data.allHeroesJson.totalCount})</h3>

            <ul className="links">
                <li>
                    <h5><Link to="/fortnite/save-the-world/heroes">All</Link></h5>
                </li>
                <li>
                    <h5><Link to="/fortnite/save-the-world/heroes/constructor">Constructor</Link></h5>
                </li>
                <li>
                    <h5><Link to="/fortnite/save-the-world/heroes/ninja">Ninja</Link></h5>
                </li>
                <li>
                    <h5><Link to="/fortnite/save-the-world/heroes/outlander">Outlander</Link></h5>
                </li>
                <li>
                    <h5><Link to="/fortnite/save-the-world/heroes/soldier">Soldier</Link></h5>
                </li>
            </ul>

            <div className="heroesCards">
                {data.allHeroesJson.edges.map(({ node }, index) => (
                <div>
                    <Link className="link" to={`/fortnite/save-the-world/heroes/${node.class}/${node.fields.cardSlug}`}>
                        <div className="heroCard" key={index}>
                            {node.image && (
                                <Image
                                fluid={node.image.childImageSharp.fluid}
                                alt={node.name}
                                />
                            )}
                            
                            <div className="heroCard__overlay">
                                {node.name && <p className="heroCard__texte">{node.name}</p>}
                            </div>
                            
                            <div className="heroCard__bottom">
                                {node.class && <p>{node.class}</p>}
                            </div>
                        </div>
                    </Link>
                   
                    {/* {node.fields.cardSlug && (
                    <Link className="link" to={`/fortnite/save-the-world/heroes/${node.class}/${node.fields.cardSlug}`}>
                        {node.fields.cardSlug}
                    </Link>
                    )} */}
                </div>
                ))}
            </div>
        
        </Layout>
    )
}

export default HeroesPage
