/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0B0C10',
          secondary: '#1F2937',
          accent: '#3B82F6'
        }
      }
    },
  },
  plugins: [],
}