import React from "react"
export default ({ pageContext: { heroes } }) => (
  <section>
    {heroes.name} - {heroes.breed}
  </section>
)