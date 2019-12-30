import React from "react"
// import { Link } from "gatsby"
// import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const LivePage = () => {

  const dataTwitch = useStaticQuery(graphql`
    {
      twitchuser {
        display_name
        description
        profile_image_url
      }
      allTwitchvideo {
        edges {
          node {
            title
            url
            type
          }
        }
      }
    }
  `)

  console.log(dataTwitch);
  // console.log(dataTwitchVideo);
  
  return (
    <Layout>
    <SEO title="Live" />
      <h1>Live</h1>

      <div className="playerTwitch">
        <iframe title="playerTwitch" src="https://player.twitch.tv/?channel=iamfabriceg" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
      </div>

      {/* <h3>Chat</h3>
      <iframe src="https://www.twitch.tv/embed/iamfabriceg/chat" frameborder="0" scrolling="no" height="500"
          width="350"></iframe> */}

      {/* <p><Link to="/fortnite/">Fortnite</Link></p> */}

      <p className="xxx">{dataTwitch.twitchuser.display_name}</p>
      <p className="xxx">{dataTwitch.twitchuser.description}</p>
      <p className="xxx">{dataTwitch.twitchuser.profile_image_url}</p>
      {/* <img src="{dataTwitch.twitchuser.profile_image_url}" /> */}

      <div className="xxx">
        <div className="xxx">
          <p>{dataTwitch.allTwitchvideo.edges[0].node.title}</p>
          <p>{dataTwitch.allTwitchvideo.edges[0].node.url}</p>
          <p>{dataTwitch.allTwitchvideo.edges[0].node.type}</p>
        </div>
      </div>
    </Layout>
  )
}

export default LivePage