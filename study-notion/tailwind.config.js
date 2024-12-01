/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          900: '#000912', // Replace this hex value with the desired shade of rich black
          700: '#1a1f24', // example shade for richblack-700, adjust as needed
          800: '#0d1014',  // replace with your hex value for 800 shade
          100: '#e0e2e6',
          5: '#4C5B6B',
       
        },
      },
    },
  },
  plugins: [],
}