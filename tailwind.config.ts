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
          400: "#C73BFF",
          500: "#C020FF",
          600: "#BB11FF",
          700: "#B300FA",
        },
        secondary: {
          700: "#1B183D",
          800: "#120E2C",
          900: "#0D0A20",
        },
      },
      fontFamily: {
        "rubik": "Rubik, sans-serif",
      },
      screens: {
        "3xl": "2048px",
      },
    },
  },
  plugins: [],
}

