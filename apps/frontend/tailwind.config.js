/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated gray palette (minimal adjustments)
        gray: {
          50: '#f9f9f9',   // Slightly warmer white
          100: '#f6f6f6',  // Adjusted light background
          200: '#e3e3e3',  // Slightly warmer light border
          300: '#d1d1d1',  // Adjusted medium border  
          400: '#919191',  // Slightly warmer secondary text
          500: '#5d5f63',  // Adjusted body text
          600: '#3a3d42',  // Slightly cooler strong text
          700: '#2e2f32',  // Adjusted headings
          800: '#232324',  // Slightly lighter strong headings
          900: '#181b21',  // Adjusted deep black
        }
      }
    },
  },
  plugins: [],
}