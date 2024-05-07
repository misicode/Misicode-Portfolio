/** @type {import('tailwindcss').Config} */
module.exports = {
  configType: "ts",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#EE2CFF",
          600: "#EC00FE",
          700: "#D900EA",
        },
        secondary: {
          700: "#170E3A",
          800: "#120B2B",
          900: "#0D081E",
        },
      },
      fontFamily: {
        "rubik": "Rubik, sans-serif",
      }
    },
  },
  plugins: [],
}

