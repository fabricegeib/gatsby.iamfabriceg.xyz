import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const bgStyle = {
  backgroundColor: '#333333',
  color: '#ffffff',
  margin: '0 auto',
  paddingTop: '24px'
}

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, 200px)`
};

export const query = graphql`
  {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxHeight: 200, maxWidth: 200) {
            src
            srcSet
            base64
            aspectRatio
            originalImg
            sizes        
          }
        }
      }
    }
  }
`

const ComponentAllImageSharp = ({ data }) => 
  <div className="container--full" style={bgStyle}>
    <p><Link style={bgStyle} to="/fortnite/save-the-world">Go back to Save The World</Link></p>

    <div style={imgGridStyle}>
      {data.allImageSharp.edges.map(edge => 
        <div>
          <Img fluid={edge.node.fluid} />
          <p>{edge.node.id}</p>
        </div>
      )}
    </div>
  </div>

export default ComponentAllImageSharp