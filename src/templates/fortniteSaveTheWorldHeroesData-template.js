import React from "react"

export default ({ pageContext: { heroes } }) => (
  <section>
    <p>{heroes.rarity} | {heroes.type}</p>
    <p>{heroes.name}</p>
    <p>{heroes.class}</p>
    <ul>
      <li>{heroes.skills[0]}</li>
      <li>{heroes.skills[1]}</li>
      <li>{heroes.skills[2]}</li>
    </ul>
  </section>
)