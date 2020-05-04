import React from "react"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

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
      <div className="chatTwitch">
        <iframe src="https://www.twitch.tv/embed/iamfabriceg/chat" frameborder="0" scrolling="no" height="300"
          width="350"></iframe>
      </div> */}

      {/* <p><Link to="/fortnite/">Fortnite</Link></p> */}

      {/* <div className="twitchUser">
        <p className="xxx">{dataTwitch.twitchuser.display_name}</p>
        <p className="xxx">{dataTwitch.twitchuser.description}</p>
        <p className="xxx">{dataTwitch.twitchuser.profile_image_url}</p>
      </div> */}

      {/* <img src="{dataTwitch.twitchuser.profile_image_url}" /> */}

      {/* <div className="allTwitchVideos">
        {dataTwitch.allTwitchvideo.edges.map(({ node }, index) => (
        <div className="twitchVideo" key={index}>

          <h3>{node.title}</h3>
          <a href={node.url} rel="noopener noreferrer" target="_blank">link</a>
          <p>{node.type}</p>

        </div>
        ))}
      </div> */}

       {/* https://player.twitch.tv/?autoplay=false&video=v423873880 */}
    </Layout>
  )
}

export default LivePage