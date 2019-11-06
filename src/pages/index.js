import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="games">
      <h1>Games</h1>

      <ul>
        <li><Link to="/fortnite/">Fortnite</Link></li>
        {/* <li><Link to="/red-dead-redemption-2/">Red Dead Redemption 2</Link></li> */}
      </ul>
    </div>
  </Layout>
)

export default IndexPage
