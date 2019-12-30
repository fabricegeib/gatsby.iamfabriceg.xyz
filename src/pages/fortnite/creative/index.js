import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
// import Image from "../components/image"
import SEO from "../../../components/seo"

const FortnitePage = () => (
  
  <Layout>
    <SEO title="Fortnite Creative" />
    <h3><span className="backArrow"><Link to="/fortnite/">&#8592;</Link></span>Fortnite</h3>
    <p>Creative</p>

    <div className="xxx">
      <div className="cards">
        <a href="https://www.epicgames.com/fn/0581-7738-9609" target="_blank" rel="noopener norefferer">
          <div className="card creative">
            <h3>SKIDIP DEATH SQUARE</h3>
            <p>by LukyVj</p>
            <p className="link">0581-7738-9609</p>
          </div>
        </a>
      </div>
    </div>
  </Layout>
)

export default FortnitePage
