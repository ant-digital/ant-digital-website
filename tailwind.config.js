const plugin = require("tailwindcss/plugin")

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
  primary: "#45A6FF",
  onPrimary: "black",
  primaryDark: "#3f90d9",
  onPrimaryDark: "white",

  surface: "white",
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
    extend: {
      colors,
      typography,
    },
  },
  plugins,
}
