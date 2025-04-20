/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '10%, 90%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        }
      },
      animation: {
        fadeInOut: 'fadeInOut 3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
