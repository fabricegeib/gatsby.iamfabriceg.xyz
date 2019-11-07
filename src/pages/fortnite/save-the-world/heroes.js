import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => 
  <div>
    <div>
      {data.allFortniteSaveTheWorldHeroes.edges.map(({ node }, index) => (
        <ul key={index}>
          <li>{node.name}</li>
          <li>{node.class}</li>
        </ul>
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