/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{jsx,tsx}", "./src/*.{jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: "rgba(33,33,33,1)",        
      }
    },
  },
  plugins: [],
}

