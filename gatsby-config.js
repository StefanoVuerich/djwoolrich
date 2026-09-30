const siteConfig = require("./src/siteconfig.json")

require("dotenv").config({
  path: `.env.local`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  jsxRuntime: "automatic",
  siteMetadata: {
    title: siteConfig.name,
    // siteUrl include il pathPrefix: è la base pubblica reale delle pagine
    siteUrl: `${siteConfig.siteUrl}${siteConfig.pathPrefix}`,
    description: siteConfig.descrizione,
    image: siteConfig.immagineOg,
    lang: "it",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Esclude 404 e pagine legali dalla sitemap
        excludes: [`/404/`, `/404.html`, `/privacy/`, `/cookie/`, `/terms/`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.name,
        start_url: `/`,
        lang: `it`,
        background_color: `#ffffff`,
        theme_color: `#1a1a2e`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
