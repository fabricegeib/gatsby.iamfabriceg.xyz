import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"

export default ({ pageContext: { games } }) => (
  <Layout>
    <div>
      <section>
        <p>{games.name}</p>
        <p>{games.dateRelease}</p>
        <ul>
          <li>{games.platforms[0]}</li>
          <li>{games.platforms[1]}</li>
          <li>{games.platforms[2]}</li>
          <li>{games.platforms[3]}</li>
        </ul>
      </section>
    </div>
  </Layout>
)