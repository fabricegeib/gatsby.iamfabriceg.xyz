import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

const FortnitePage = () => (
  
  <Layout>
    <SEO title="Fortnite" />
    <div className="container">
      {/* <h3><span className="backArrow"><Link to="/">&#8592;</Link></span>Fortnite</h3> */}
      <p className="breadcrumb">
        Fortnite
      </p>
      <p>Build. Fight. Create.</p>

      <div className="cards">
        <Link to="/fortnite/battle-royale/">
          <div className="card">
            <h3>Battle Royale</h3>
          </div>
        </Link>

        <Link to="/fortnite/creative/">
          <div className="card">
            <h3>Creative</h3>
          </div>
        </Link>

        <Link to="/fortnite/save-the-world/">
          <div className="card">
            <h3>Save The World</h3>
          </div>
        </Link>
      </div>

      {/* <div className="xxx">
        <ul className="xxx">
          <li>
            <Link to="/fortnite/battle-royale/">Battle Royale</Link>
          </li>
          <li>
            <Link to="/fortnite/creative/">Creative</Link>
          </li>
          <li>
          <Link to="/fortnite/save-the-world/">Save The World</Link>
          </li>
        </ul>
      </div> */}
    </div>
  </Layout>
)

export default FortnitePage
