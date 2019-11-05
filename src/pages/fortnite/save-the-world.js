import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

const SaveTheWorldPage = () => (
  <Layout>
    <SEO title="Save The World" />
    <h1><Link to="/fortnite/">Fortnite</Link></h1>
    <h3>Save the World</h3>
    <p>Joueur contre l'environnement (PvE)</p>

    <div className="xxx">
        <ul>
            <li><Link to="/fortnite/battle-royale/">Battle Royale</Link></li>
        </ul>
    </div>
  </Layout>
)

export default SaveTheWorldPage
