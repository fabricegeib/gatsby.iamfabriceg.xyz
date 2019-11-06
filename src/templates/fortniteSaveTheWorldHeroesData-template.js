import React from "react"

// export default ({ pageContext: { heroes } }) => (
export default ({ pageContext: { heroes } }) =>console.log(heroes) || (
  <div className="container">
    <section>
      <p>{heroes.rarity} | {heroes.type}</p>
      <p>{heroes.name}</p>
      <p>{heroes.class}</p>
      <ul>
        {/* <li>{heroes.skills[0]}</li> */}
        {/* <li>{heroes.skills[1]}</li> */}
        {/* <li>{heroes.skills[2]}</li> */}
        <li>{heroes.skills.length && heroes.skills[0]}</li>
        {/* <li>{heroes && heroes.skills[1]}</li> */}
      </ul>
    </section>

    <section className="card">
      <p>{heroes.rarity} | {heroes.type}</p>
      <p>{heroes.name}</p>
      <p>{heroes.class}</p>
      <p>{heroes.perk}</p>
    </section>
  </div>
)