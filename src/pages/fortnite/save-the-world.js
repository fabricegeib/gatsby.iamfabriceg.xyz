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
          <li><Link to="/fortnite/save-the-world/heroes/">Heroes</Link></li>
          <ul>
            <li><Link to="/fortnite/save-the-world/hereos/soldats">Soldiers</Link></li>
          </ul>
          <li><Link to="/fortnite/save-the-world/armes-a-distance/">Armes à distance</Link></li>
          <ul>
            <li><Link to="/fortnite/save-the-world/armes-a-distance/fusils-d-assaut/">Fusils d'assaut</Link></li>
            <li><Link to="/fortnite/save-the-world/armes-a-distance/fusils-a-pompe/">Fusils à pompe</Link></li>
          </ul>
            {/* <li><Link to="/fortnite/battle-royale/">Battle Royale</Link></li> */}
        </ul>
    </div>
  </Layout>
)

export default SaveTheWorldPage
