import React from "react"
import { Link, graphql } from "gatsby"
// graphql

  export default ({ pageContext: { heroesClass } }) => heroesClass !== undefined && (
    <div className="container--full">
      <p><Link to="/fortnite/save-the-world">Go back to Save The World</Link></p>
      <section>
        <p>{heroesClass.title}</p>
        <p>{heroesClass.rarity} | {heroesClass.type}</p>
        <p>{heroesClass.name}</p>
        <p>{heroesClass.class}</p>
        <ul>
          {heroesClass.skills && heroesClass.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </section>
  
      <section className="card">
        <p>{heroesClass.rarity} | {heroesClass.type}</p>
        <p>{heroesClass.title}</p>
        <p>{heroesClass.class}</p>
        <p>{heroesClass.perk}</p>
      </section>
    </div>
  )
