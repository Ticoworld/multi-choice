/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '500': '500px',
        '480': '480px',
        '470': '470px'
      },
    },
  },
  plugins: [],
}

