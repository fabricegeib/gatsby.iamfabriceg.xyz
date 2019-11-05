import React from "react"

export default ({ pageContext: { heroes } }) => (
  <section>
    <p>{heroes.rarity} | {heroes.type}</p>
    <p>{heroes.name}</p>
    <p>{heroes.class}</p>
    <p>{heroes.skills}</p>
  </section>
)