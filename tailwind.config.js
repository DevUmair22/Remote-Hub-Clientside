

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#272727',
        'secondary': {
          light: '#10BCAD',
          dark: "#0f766e"
        }, 'background': "#FBFBFF",



      },
    },
  },
  plugins: [],



}

