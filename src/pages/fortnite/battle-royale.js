import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

const BattleRoyalePage = () => (
  <Layout>
    <SEO title="Battle Royale" />
    <h3><Link to="/fortnite/">Fortnite > Battle Royale</Link></h3>
    
    <p>Joueur contre joueur (PvP)</p>

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
