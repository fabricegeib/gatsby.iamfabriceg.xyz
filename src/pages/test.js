import React from "react"    

function CoolComponent({ adjective = 'Cool' }) {
  return <p>Youpi So {adjective} !</p>
}

export default () => (
  <div style={{ color: `purple`, fontSize: `18px` }}>
    <CoolComponent adjective="awesome" />
    <CoolComponent />
  </div>
)

// export default function Home() {
//   return <div>Hello Gatsby!</div>
// }