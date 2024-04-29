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
          800: "#24213B",
          900: "#0A0521",
        },
      }
    },
  },
  plugins: [],
}

