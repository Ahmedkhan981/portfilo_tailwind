/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../Portfolio//index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindScrollbar],
};