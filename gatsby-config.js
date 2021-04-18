const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Ant Digital`,
      short_name: `Ant Digital`,
      start_url: `/`,
      background_color: `white`,
      theme_color: `#45A6FF`,
      display: `minimal-ui`,
      icon: `src/images/logo.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: "gatsby-plugin-postcss",
    options: {
      postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
    },
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-gatsby-cloud`,
]

// load production only plugins
if (process.env.NODE_ENV === "production") {
  plugins.push("gatsby-plugin-preact")
}

module.exports = {
  siteMetadata: {
    title: `Ant Digital`,
    description: `We build performant and accessible websites that delights your customers.`,
    author: "@ant_digital",
  },
  plugins,
}
