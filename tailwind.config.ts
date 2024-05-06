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
        },
        secondary: {
          700: "#120B3B",
          800: "#0E092D",
          900: "#0A0521",
        },
      },
      fontFamily: {
        "rubik": "Rubik, sans-serif",
      }
    },
  },
  plugins: [],
}

