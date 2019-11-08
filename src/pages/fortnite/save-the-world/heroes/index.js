import React from 'react';
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

export const query = graphql `
    query {
        allHeroesJson {
            edges {
                node {
                    name
                    slug
                    id
                    class
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;

const HeroesPage = ({ data }) => {
    // const heroes = data.allHeroesJson;

    console.log(data)
    
    return (
        <div className="container">
            <p><Link to="/fortnite/save-the-world">Go back to Save The World</Link></p>

            <h3>Heroes</h3>

            <div className="cards">
                {data.allHeroesJson.edges.map(({ node }, index) => (   
                    <div>
                        <div className="card" key={index}>
                            {/* <p className="card__name">{node.name}</p> */}
                            
                            <Image
                                fluid={node.image.childImageSharp.fluid}
                                alt={node.name}
                            />

                            <div className="card__overlay">
                                <p>{node.class}</p>
                            </div>
                            <div className="card__bottom">
                            </div>
                        </div>
                        <p className="card__name">{node.name}</p>
                        <Link className="link" to={node.slug}>link</Link>
                    </div>
                ))}
            </div>


            
        </div>
    )
};

export default HeroesPage;