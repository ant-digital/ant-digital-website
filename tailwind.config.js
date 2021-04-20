module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
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
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
