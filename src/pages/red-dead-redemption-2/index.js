import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const RedDeadRedemption2Page = class extends React.Component {

  state = {
    loading: true,
    error: false,
    fetchData: []
  }

  componentDidMount() {
    fetch('https://madam-nazar-location-api-2.herokuapp.com/location/current')
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
        <SEO title="Red Dead Redemption 2" />
          <div className="container">
            <h3><span className="backArrow"><Link to="/">&#8592;</Link></span>Red Dead Redemption 2</h3>
            <p>Outlaws For Life / Hors-la-loi pour la vie</p>

            <div className="xxx">
              <ul className="xxx">
                <li>
                  <Link to="/red-dead-redemption-2/">Online</Link>
                </li>
                <li>
                  <Link to="/red-dead-redemption-2/">Story</Link>
                </li>
              </ul>
            </div>
          
            <div className="madamnazar">
              {fetchedData && <p>{fetchedData.dataFor}</p>}
              {fetchedData && <p>{fetchedData.data.location.region.name}</p>}
              {fetchedData && <p>{fetchedData.data.location.region.precise}</p>}

              {fetchedData && <p>{fetchedData.data.location.cardinals.full}</p>}
              {fetchedData && <p>{fetchedData.data.location.cardinals.simplified}</p>}

              
              {fetchedData && <img src={fetchedData.data.location.image} alt="{fetchedData.data.location.region.name}" />}
              
              {fetchedData && <p>{fetchedData.data.name}</p>}
              <p><a href="https://madamnazar.io/" target="_blank" rel="noopener noreferrer">data from madamnazar.io</a></p>
            </div>
            {/* <Link to="/">Go back to the homepage</Link> */}
        </div>
      </Layout>
    )
  }
}

export default RedDeadRedemption2Page