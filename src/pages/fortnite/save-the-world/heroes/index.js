import React from "react"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"

const ComponentName = ({ data }) => 
  <div className="container--full">
    <p><Link to="/fortnite/save-the-world">Go back to Save The World</Link></p>
    <div className="cards">
      {data.allFile.edges.map(({ node }, index) => (
        <div key={index} className="card">
          <img src={node.publicURL} alt={node.name} />
          <p>{node.name}</p>
        </div>
      ))}
    </div>
    
    <h1>Heroes ({allFile.pageInfo.itemCount})</h1>

    <div className="cards">
      {data.allFortniteSaveTheWorldHeroes.edges.map(({ node }, index) => (
        <div key={index} className="card">
          <p>{node.name}</p>
          <p>{node.class}</p>
        </div>
      ))}
    </div>
  </div>

export const query = graphql`
  {
    allFortniteSaveTheWorldHeroes {
      edges {
        node {
          id
          class
          name
        }
      }
      pageInfo {
        itemCount
      }
    }
    allFile(filter: {relativeDirectory: {eq: "fortnite/save-the-world/heroes"}}) {
      edges {
        node {
          base
          name
          publicURL
          dir
        }
      }
    }
  }
`

export default ComponentName