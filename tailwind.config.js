/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontBody: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#f62682",
        secondary: "#6f5cf1",
        bgColor: "#0f172a",
      },
    },
  },
  plugins: [],
};
