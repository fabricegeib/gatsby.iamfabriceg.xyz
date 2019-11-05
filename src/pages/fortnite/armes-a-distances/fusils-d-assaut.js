import { Link, graphql } from "gatsby"
import React from "react"

class FusilDAssautComponent extends React.Component {
  render() {
    const data = this.props.data.allCollectionArmesADistanceFusilsDAssautCsv.edges
    return (
      <div>
        <Link to="/fortnite/save-the-world">Go back to Save The World</Link>
        <table>
          <thead>
            <tr>
              <th>Fusil d'assault</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.value} ${i}`}>
                <td>{row.node.Fusils_d_assaut}</td>
                {/* <td>{row.node.Fusils_d_assaut[3]}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FusilDAssautComponent

export const IndexQuery = graphql`
  query {
    allCollectionArmesADistanceFusilsDAssautCsv {
      edges {
        node {
          id
          Fusils_d_assaut
        }
      }
      totalCount
    }
  }
`