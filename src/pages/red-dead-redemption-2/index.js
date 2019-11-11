import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const RedDeadRedemption2Page = () => (
  <Layout>
    <SEO title="Red Dead Redemption 2" />
    <h3><span className="backArrow"><Link to="/">&#8592;</Link></span>Red Dead Redemption 2</h3>
    <p>Text or description</p>
    <p>
        <a href="https://madamnazar.io/" target="_blank" rel="noopener noreferrer">madamnazar.io</a>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RedDeadRedemption2Page
