/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "rgb(59 130 246)",
      secondary: "#00f6ff",
    },
    extend: {},
  },
  plugins: [],
});
