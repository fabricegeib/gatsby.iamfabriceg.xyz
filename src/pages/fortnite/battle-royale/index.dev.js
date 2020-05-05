import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
// import Image from "../components/image"
import SEO from "../../../components/seo"

// const BattleRoyalePage = () => (
const BattleRoyalePage = class extends React.Component {

  // state = {
  //   loading: true,
  //   error: false,
  //   fetchData: []
  // }

  // componentDidMount() {
  //   fetch('https://fortnite-api.com/v2/shop/br')
  //     .then(response => {
  //       // console.log(response);
  //       return response.json()
  //     }).then(json => {
  //       console.log(json)
  //       this.setState({
  //         fetchedShop: json,
  //         loading: false
  //       })
  //     })
    
  // }

  componentDidMount() {
    var url = "https://fortnite-api.com/v2/shop/br";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({ 
          clouds: d 
        });
        console.log("state", this.state.clouds)
      })
      .catch(error => console.log(error))
  }

  render() {

    // const {loading, fetchedShop} = this.state
    // console.log(fetchedShop)
    // fetchedShop.data.daily.entries[0].items[0].name

    console.log("state")


    return (


    <Layout>
      <SEO title="Battle Royale" />
      <div className="fortnite_battle-royale">
        <div className="container">
          <h3><span className="backArrow"><Link to="/fortnite/">&#8592;</Link></span>Fortnite</h3>

          <h3>Battle Royale</h3>
          
          <p>Drop in to new world (PvP)</p>

          <div className="fortnite_battle-royale_shop">
            
            {/* <div>
              {
                this.state.clouds.map(((cloud, index) =>
                  <th key={`${cloud.cloud}${index}`}>
                    <div>
                      <div>
                        {cloud.cloud}
                        <div>
                          {
                            cloud.data_centers.map(d => (
                              <div>
                                {d.title}
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </th>
                ))
              }
            </div> */}

          </div>
        </div>
      </div>
    </Layout>
    )
  }
}

export default BattleRoyalePage
