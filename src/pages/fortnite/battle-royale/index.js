import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
// import Image from "../components/image"
import SEO from "../../../components/seo"

// const BattleRoyalePage = () => (
const BattleRoyalePage = class extends React.Component {

  state = {
    loading: true,
    error: false,
    fetchData: []
  }

  componentDidMount() {
    fetch('https://fortnite-api.com/v2/shop/br')
      .then(response => {
        // console.log(response);
        return response.json()
      }).then(json => {
        console.log(json)
        this.setState({
          fetchedData: json,
          loading: false
        })
      })
  }

  render() {

    const {loading, fetchedData} = this.state
    console.log(fetchedData)

    return (
    <Layout>
      <SEO title="Battle Royale" />
      <div className="x">
        <div className="container">
          <h3><span className="backArrow"><Link to="/fortnite/">&#8592;</Link></span>Fortnite</h3>

          <h3>Battle Royale</h3>
          
          <p>Drop in to new world (PvP)</p>

          {fetchedData && <p>{fetchedData.data.daily.entries[0].finalPrice}</p>}
          {fetchedData && <p>{fetchedData.data.daily.entries[0].items[0].name}</p>}



          <div className="xxx">
              <ul>
                {/* <li><Link to="/fortnite/save-the-world/">Save the World</Link></li> */}
                <a class="link skidip" href="https://skidip.team" rel="noopener noreferrer" target="_blank">skidip.team</a>
              </ul>
          </div>
        </div>
      </div>
    </Layout>
    )
  }
}

export default BattleRoyalePage
