const siteConfig = require("./src/siteconfig.json")

require("dotenv").config({
  path: `.env.local`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/djwoolrich",
  jsxRuntime: "automatic",
  siteMetadata: {
    title: siteConfig.name,
    siteUrl: siteConfig.siteUrl,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
