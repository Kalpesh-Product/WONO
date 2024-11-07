/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Popins-Regular', 'sans-serif'], // Set Poppins as default sans-serif
      },
    },
  },
  plugins: [],
}


