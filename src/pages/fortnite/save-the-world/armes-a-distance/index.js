import { Link, graphql } from "gatsby"
import React from "react"

class ArmesADistancePage extends React.Component {
  render() {
    const dataFusilsDAssaut = this.props.data.allCollectionArmesADistanceFusilsDAssautCsv.edges
    const dataFusilsAPompe = this.props.data.allCollectionArmesADistanceFusilsAPompeCsv.edges
    return (
      <div className="container--full">
        {/* <p><Link to="/fortnite/save-the-world">Go back to Save The World</Link></p> */}
        <p className="breadcrumb">
          <Link to="/fortnite/">Fortnite</Link> > <Link to="/fortnite/save-the-world/">Save The World</Link> > Armes à distance
        </p>
        <div className="oT">
          <table>
            <thead>
              <tr>
                <th>Fusil d'assault</th>
                <th colSpan="2">Typique</th>
                <th colSpan="2">Atypique</th>
                <th colSpan="2">Rare</th>
                <th colSpan="2">Épique</th>
                <th colSpan="2">Légendaire</th>
              </tr>
            </thead>
            <tbody>
              {dataFusilsDAssaut.map((row, i) => (
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
        <div className='oT'>
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
              {dataFusilsAPompe.map((row, i) => (
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
      </div>
    )
  }
}

export default ArmesADistancePage

export const IndexQuery = graphql`
  query {
    allCollectionArmesADistanceFusilsDAssautCsv {
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
    },
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