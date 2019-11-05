import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

const BattleRoyalePage = () => (
  <Layout>
    <SEO title="Battle Royale" />
    <h1><Link to="/fortnite/">Fortnite</Link></h1>
    <h3>Battle Royale</h3>
    <p>Joueur contre joueur (PvP)</p>

    <div className="xxx">
        <ul>
          <li><Link to="/fortnite/save-the-world/">Save the World</Link></li>
        </ul>
    </div>
  </Layout>
)

export default BattleRoyalePage
