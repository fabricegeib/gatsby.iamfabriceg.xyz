import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const LivePage = () => (
  <Layout>
    <SEO title="Live" />

    <h1>Twitch</h1>
    <div className="playerTwitch">
        <iframe title="playerTwitch" src="https://player.twitch.tv/?channel=iamfabriceg" frameborder="0" allowfullscreen="true" scrolling="no"
            height="378" width="620"></iframe>
    </div>
    {/* <h3>Chat</h3>
    <iframe src="https://www.twitch.tv/embed/iamfabriceg/chat" frameborder="0" scrolling="no" height="500"
        width="350"></iframe> */}
    <p><Link to="/fortnite/">Fortnite</Link></p>
  </Layout>
)

export default LivePage