const plugin = require("tailwindcss/plugin")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#45A6FF",
        onPrimary: "black",
        primaryDark: "#3f90d9",
        onPrimaryDark: "white",

        surface: "white",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(({ addVariant, e, postcss }) => {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules(rule => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`
        })
      })
    }),
  ],
}
