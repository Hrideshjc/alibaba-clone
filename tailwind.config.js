
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aliPrimary: '#FA6C48',
        aliBg: '#F7F8FA', 
        aliText: '#222222',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}