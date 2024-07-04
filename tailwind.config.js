/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "350px",
        s: "450px",
        ss: "550px",
        sl: "1300px",
      },
      colors: {
        primary: "#000fff",
        'slate-850': '#132233',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "40px",
      },
    },
  },
  plugins: [],
}

