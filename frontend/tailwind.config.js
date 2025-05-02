/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-medium': ['"Popins-Medium"', 'sans-serif'],
        'poppins-regular': ['"Popins-Regular"', 'sans-serif'],
        'poppins-black': ['"Popins-Black"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
