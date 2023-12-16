/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#D71A21',
        secondary: '#32C0EE',
        tertiary: "#2e2e2e",
        grey: '#414141',
        dark: '#0D0D0D',
        light: "#EEEEEE",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
      fontSize: {
        28: '28px',
        32: '32px',
        45: '45px',
      },
      borderRadius: {
        10: '10px'
      }
    },
  },
  plugins: [],
}

