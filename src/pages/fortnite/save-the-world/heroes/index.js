import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"

export const query = graphql`
  query {
    allHeroesJson {
      edges {
        node {
          name
          rarity
          id
          class
          type
          collectionBook {
            collect
          }
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

  const heroes = data.allHeroesJson;

  // console.log(data)
  console.log(heroes)

  return (
    <Layout>
      <SEO title="Fortnite Save The World - Heroes" />
      <div className="fortnite">
        <div className="container">
          {/* <h3><span className="backArrow"><Link to="/fortnite/save-the-world/">&#8592;</Link></span>Fortnite - Save The World</h3> */}

          <p className="breadcrumb">
            <Link to="/fortnite/">Fortnite</Link> > <Link to="/fortnite/save-the-world/">Save The World</Link> > Heroes ({heroes.totalCount})
          </p>

          {/* <div data-type={data.allHeroesJson.totalCount}></div> */}
          {/* <p className="breadcrumb">
              <Link to="/fortnite/">Fortnite</Link> > <Link to="/fortnite/save-the-world/">Save The World</Link>
          </p> */}

          {/* <h3 className="page_title">Heroes ({heroes.totalCount})</h3> */}

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
            {heroes.edges.map(({ node }, index) => (
              <div key={node.id}>
                <Link className="link" to={`/fortnite/save-the-world/heroes/${node.class}/${node.fields.cardSlug}/`}>
                  <div className="heroCard" data-rarity={node.rarity}>
                    {node.image && (
                      <Image
                        fluid={node.image.childImageSharp.fluid}
                        alt={node.name}
                      />
                    )}
                    <div className="heroCard__overlay">
                      <div data-class={node.class}></div>
                      {/* {node.class && <p className="heroCard__class">{node.class}</p>} */}
                    </div>
                    <div className="heroCard__bottom">
                      {node.name && <p className="heroCard__texte">{node.name}</p>}
                      {node.collectionBook.collect && <div className="heroCard__collectionBook-collect">{node.collectionBook.collect}</div>}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div> {/* heroesCards */}
        </div> {/* container */}
      </div>
    </Layout>
  )
}

export default HeroesPage
