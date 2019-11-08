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
        <div className="container--full">
            <p><Link to="/fortnite/save-the-world">Go back to Save The World</Link></p>

            <div className="cards">
                {data.allHeroesJson.edges.map(({ node }, index) => (
                    
                    <div className="card" key={index}>
                        <p>{node.name}</p>
                        
                        <Image
                            fluid={node.image.childImageSharp.fluid}
                            alt={node.name}
                        />

                        <p>{node.class}</p>
                    </div>
                ))}
            </div>


            
        </div>
    )
};

export default HeroesPage;