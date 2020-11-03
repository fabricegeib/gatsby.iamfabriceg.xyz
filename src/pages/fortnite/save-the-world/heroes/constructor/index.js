import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"


import Layout from "../../../../../components/layout"
// import Image from "../components/image"
import SEO from "../../../../../components/seo"

const ConstructorPage = () => {

    const data = useStaticQuery(graphql`
    {
        allHeroesJson(filter: {class: {eq: "constructor"}}) {
            edges {
                node {
                    name
                    rarity
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
    `)
        
    console.log(data)

    return (
        <Layout>
        <SEO title="Fortnite Save The World - Heroes : Constructor" />
        <div className="fortnite">
            <div className="container">
                {/* <h3><span className="backArrow"><Link to="/fortnite/save-the-world/">&#8592;</Link></span>Fortnite</h3> */}

                <p className="breadcrumb">
                    <Link to="/fortnite/">Fortnite</Link> > <Link to="/fortnite/save-the-world/">Save The World</Link> > <Link to="/fortnite/save-the-world/heroes">Heroes</Link> > Constructor ({data.allHeroesJson.totalCount})
                </p>

                {/* <h3>Constructor ({data.allHeroesJson.totalCount})</h3> */}
                
                <ul className="links">
                    <li>
                        <h5><Link to="/fortnite/save-the-world/heroes/">All</Link></h5>
                    </li>
                    <li>
                        <h5><Link to="/fortnite/save-the-world/heroes/constructor/">Constructor</Link></h5>
                    </li>
                    <li>
                        <h5><Link to="/fortnite/save-the-world/heroes/ninja/">Ninja</Link></h5>
                    </li>
                    <li>
                        <h5><Link to="/fortnite/save-the-world/heroes/outlander/">Outlander</Link></h5>
                    </li>
                    <li>
                        <h5><Link to="/fortnite/save-the-world/heroes/soldier/">Soldier</Link></h5>
                    </li>
                </ul>

                <div className="heroesCards">
                    {data.allHeroesJson.edges.map(({ node }, index) => (
                    <div>
                        <Link className="link" to={`/fortnite/save-the-world/heroes/${node.class}/${node.fields.cardSlug}/`}>
                            <div className="heroCard" data-rarity={node.rarity} key={index}>
                                {node.image && (
                                    <Image
                                    fluid={node.image.childImageSharp.fluid}
                                    alt={node.name}
                                    />
                                )}
                                <div className="heroCard__overlay">
                                    <div data-class={node.class}></div>
                                </div>
                                <div className="heroCard__bottom">
                                    {node.name && <p className="heroCard__texte">{node.name}</p>}
                                </div>
                            </div>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ConstructorPage