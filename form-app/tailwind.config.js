/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom left, #FF930F, #FFAD22, #E5E349, #bdff30)',
      },
    },
  },
  plugins: [],
}