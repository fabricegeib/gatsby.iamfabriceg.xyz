import React from "react"

  export default ({ pageContext: { heroes } }) => heroes !== undefined && (
    <div className="container">
      <section>
        <p>{heroes.rarity} | {heroes.type}</p>
        <p>{heroes.name}</p>
        <p>{heroes.class}</p>
        <ul>
          {heroes.skills && heroes.skills.map(skill => <li key={skill}>{skill}</li>)}
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
