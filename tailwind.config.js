/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'figr-blue': '#7053FF',
        'figr-green': '#31b970',
        'figr-text-blue': '#A594FD',
        'figr-grey': '#FFFFFF33',
        'figr-lightgrey': '#FFFFFF1A',
      },
      backgroundImage: {
        'dotted-pattern': "url('/src/assets/images/dotted-bg.png')",
        'icon-pattern': "url('/src/assets/images/icon-bg.png')",
        'item-pattern': "url('/src/assets/images/list-item-bg.png')",
      },
      transitionProperty: {
        'spacing': 'margin, padding',
        'position': 'top, left, bottom, right',
      },
      cursor: {
        'figma-green': "url('/src/assets/images/cursor-green.png'), pointer",
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}