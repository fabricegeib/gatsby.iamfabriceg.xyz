import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
// import Image from "../components/image"
import SEO from "../../../components/seo"

const BattleRoyalePage = () => (
  <Layout>
    <SEO title="Battle Royale" />
    <h3><span className="backArrow"><Link to="/fortnite/">&#8592;</Link></span>Fortnite</h3>

    <h3>Battle Royale</h3>
    
    <p>Drop in to new world (PvP)</p>

    <div className="xxx">
        <ul>
          {/* <li><Link to="/fortnite/save-the-world/">Save the World</Link></li> */}
          <a class="link skidip" href="https://skidip.team" rel="noopener noreferrer"
                    target="_blank">skidip.team</a>
        </ul>
    </div>
  </Layout>
)

export default BattleRoyalePage
