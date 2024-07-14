/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-minus-100': 'calc(100vh - 100px)',
        'screen-minus-120': 'calc(100vh - 120px)',
        'screen-minus-140': 'calc(100vh - 140px)',
      },
      colors:{
        'dark-gray':"#101115",
        'light-black':"#888888",
        'pink-red':"#F33C3C",
        'light-gray':"1E1E1E",
        'light-blue':"#0066FF",
        'hover-color':"#5F3AF3",
        'Green':"#32FA82",
      },
    },
  },
  plugins: [],
}

