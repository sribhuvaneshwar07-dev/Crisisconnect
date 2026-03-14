/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emergency: {
          red: '#D32F2F',
          blue: '#1976D2',
          dark: '#1B263B',
        }
      }
    },
  },
  plugins: [],
}
