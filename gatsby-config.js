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
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      // Defaults used for gatsbyImageData and StaticImage
      defaults: {
        formats: ["auto", "webp", "avif"],
        placeholder: "blurred",
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `ant digital`,
      short_name: `ant digital`,
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
      postCssPlugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-gatsby-cloud`,
  {
    resolve: `gatsby-theme-i18n`,
    options: {
      defaultLang: `en`,
      configPath: require.resolve(`./i18n/config.json`),
    },
  },
  {
    resolve: `gatsby-theme-i18n-lingui`,
    options: {
      localeDir: `./i18n/lingui`,
    },
  },
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      outputPath: `src/__generated__/gatsby-types.d.ts`,
      emitSchema: {
        "src/__generated__/gatsby-schema.graphql": true,
      },
    },
  },
  {
    resolve: `gatsby-plugin-portal`,
    options: {
      key: "portal",
      id: "portal",
    },
  },
  {
    resolve: "gatsby-omni-font-loader",
    options: {
      mode: "async",
      enableListener: true,
      custom: [
        {
          name: ["YoungSerif"],
          file: "/fonts/young-serif/stylesheet.css",
        },
      ],
    },
  },
  `gatsby-plugin-preload-fonts`,
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
    siteUrl: `https://ant.gatsbyjs.io`,
  },
  plugins,
}
