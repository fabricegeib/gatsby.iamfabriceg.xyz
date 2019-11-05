import React from "react"

export default ({ pageContext: { games } }) => (
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
)