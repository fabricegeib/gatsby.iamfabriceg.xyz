import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

const FortnitePage = () => (
  
  <Layout>
    <SEO title="Fortnite" />
    <div className="container">
    <h3><span className="backArrow"><Link to="/">&#8592;</Link></span>Fortnite</h3>
    <p>Build. Fight. Create.</p>

    <div className="xxx">
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
    </div>
    </div>
  </Layout>
)

export default FortnitePage
