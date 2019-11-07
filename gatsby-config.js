module.exports = {
  siteMetadata: {
    title: `iamfabriceg.xyz`,
    description: `i love code and video games`,
    author: `iamfabriceg`,
    twitter: `@iamfabriceg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iamfabriceg`,
        short_name: `iamfabriceg`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/iamfabriceg-avatar.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}