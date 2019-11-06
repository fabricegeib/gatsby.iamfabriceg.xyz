import { Link, graphql } from "gatsby"
import React from "react"

class FusilAPompeComponent extends React.Component {
  render() {
    const data = this.props.data.allCollectionArmesADistanceFusilsAPompeCsv.edges
    return (
      <div className="container--full">
        <p><Link to="/fortnite/save-the-world">Go back to Save The World</Link></p>
        <table>
          <thead>
            <tr>
              <th>Fusil à pompe</th>
              <th colSpan="2">Typique</th>
              <th colSpan="2">Atypique</th>
              <th colSpan="2">Rare</th>
              <th colSpan="2">Épique</th>
              <th colSpan="2">Légendaire</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.value} ${i}`}>
                <td>{row.node.Categories}</td>
                <td>{row.node.Typique}</td>
                <td>{row.node.field3}</td>
                <td>{row.node.Atypique}</td>
                <td>{row.node.field5}</td>
                <td>{row.node.Rare}</td>
                <td>{row.node.field7}</td>
                <td>{row.node.Epique}</td>
                <td>{row.node.field9}</td>
                <td>{row.node.Legendaire}</td>
                <td>{row.node.field11}</td>
                {/* <td>{row.node.Fusils_d_assaut[3]}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FusilAPompeComponent

export const IndexQuery = graphql`
  query {
    allCollectionArmesADistanceFusilsAPompeCsv {
      edges {
        node {
          Categories
          Typique
          field3
          Atypique
          field5
          Rare
          field7
          Epique
          field9
          Legendaire
          field11
          id
        }
      }
    }
  }
`