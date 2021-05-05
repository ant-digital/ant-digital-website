const plugin = require("tailwindcss/plugin")
const tailwindColors = require('tailwindcss/colors')

// Plugins ============================================
const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  // custom plugin for setting firefox only styles
  // usage: firefox:opacity-90
  plugin(({ addVariant, e, postcss }) => {
    addVariant("firefox", ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: "-moz-document",
        params: "url-prefix()",
      })
      isFirefoxRule.append(container.nodes)
      container.append(isFirefoxRule)
      isFirefoxRule.walkRules(rule => {
        rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
      })
    })
  }),
]

// Colors =================================================
const colors = {
  ...tailwindColors,
  primary: "#45A6FF",
  onPrimary: "black",
  primaryDark: "#3f90d9",
  onPrimaryDark: "white",

  surface: "white",
}

const boxShadow = {
  skeuomorphic:
    "0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)",
}

// Typography settings ======================================
const serif = "YoungSerif, Georgia"
const fontFamily = { serif }
const heading = {
  fontFamily: serif,
  fontWeight: "normal",
}
const typography = {
  DEFAULT: {
    css: {
      h1: heading,
      h2: heading,
      h3: heading,
      h4: heading,
      h5: heading,
      h6: heading,
      strong: heading,
    },
  },
}

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  theme: {
    fontFamily,
    colors,
    extend: {
      typography,
      boxShadow,
    },
  },
  plugins,
}
