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
          700: "#24213B",
          800: "#1F1C31",
          900: "#0A0521",
        },
      }
    },
  },
  plugins: [],
}

