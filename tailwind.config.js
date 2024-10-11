/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "rgba(33,33,33,1)",
        about: "rgba(232,232,232,255)"
      }
    },
  },
  plugins: [],
}

