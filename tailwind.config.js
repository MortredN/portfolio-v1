/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'clock-0': 'var(--clock-0)',

        'coffee-0': 'var(--coffee-0)'
      }
    }
  },
  plugins: []
}
