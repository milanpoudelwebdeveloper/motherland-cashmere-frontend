/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#222',
      green: '#6cbe02',
      grey1: '#f0f0f0',
      grey2: '#e9d7d3',
      grey3: '#E5E1E0',
    },
    screens: {
      lg: '1140px',
    },
  },
  plugins: [],
}
