/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wellness-primary': '#fdfaf7',
        'wellness-pink': '#ffe4e1',
        'wellness-mint': '#e6fffa',
        'wellness-lavender': '#f5f3ff',
        'wellness-dark': '#2d3436',
        'wellness-gray': '#636e72',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '30px',
        '4xl': '40px',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
