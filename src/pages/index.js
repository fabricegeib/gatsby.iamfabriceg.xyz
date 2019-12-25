import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="games">
      <h3>I play</h3>

      <div className="cards">
        <Link to="/fortnite/">
          <div className="card">
            <h3>Fortnite</h3>
          </div>
        </Link>
        <Link to="/battle-breakers/">
          <div className="card">
            <h3>Battle Breakers</h3>
          </div>
        </Link>
        <Link to="/red-dead-redemption-2/">
          <div className="card">
            <h3>Red Dead Redemption 2</h3>
          </div>
        </Link>
        <Link to="/grand-thef-auto-v/">
          <div className="card">
            <h3>Grand Thef Auto V</h3>
          </div>
        </Link>
        <Link to="/gran-turismo-sport/">
          <div className="card">
            <h3>Gran Turismo Sport</h3>
          </div>
        </Link>
        {/* <li><Link to="/YOLOPWNED/">404</Link></li> */}
        {/* <li><Link to="/red-dead-redemption-2/">Red Dead Redemption 2</Link></li> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
