import React from "react"
import { Link, graphql } from "gatsby"

const ComponentName = ({ data }) => 
  <div className="container--full">
    <p><Link to="/fortnite/save-the-world">Go back to Save The World</Link></p>
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
    }
  }
`

export default ComponentName