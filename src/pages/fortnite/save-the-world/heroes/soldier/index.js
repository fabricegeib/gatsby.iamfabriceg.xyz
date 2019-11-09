import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"


import Layout from "../../../../../components/layout"
// import Image from "../components/image"
import SEO from "../../../../../components/seo"

const SoldierPage = () => {

    const data = useStaticQuery(graphql`
    {
      allHeroesJson(filter: {class: {eq: "soldier"}}) {
            edges {
                node {
                        class
                        slug
                        name
                        id
                }
            }
            totalCount
        }
    }
    `)
        
    console.log(data)

    return (
        <Layout>
        <SEO title="Fortnite Save The World - Heroes : Soldier" />
        
        <p>
            <Link to="/fortnite/save-the-world/heroes">Fortnite > Save The World > Heroes</Link>
        </p>

        <h3>Heroes ({data.allHeroesJson.totalCount})</h3>
        
        <ul>
            <li>
                <h5><Link to="/fortnite/save-the-world/heroes/constructors">Constructors</Link></h5>
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

        <div className="cards">
                {data.allHeroesJson.edges.map(({ node }, index) => (
                <div>
                    <div className="card" key={index}>
                    {node.image && (
                        <Image
                        fluid={node.image.childImageSharp.fluid}
                        alt={node.name}
                        />
                    )}
                    <div className="card__overlay">
                        {node.name && <p className="card__texte">{node.name}</p>}
                    </div>
                    <div className="card__bottom">
                        {node.class && <p>{node.class}</p>}
                    </div>
                    </div>
                    {node.slug && (
                    <Link className="link" to={node.slug}>
                        link
                    </Link>
                    )}
                </div>
                ))}
            </div>


        </Layout>
    )
}

export default SoldierPage