/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'clock-0': 'var(--clock-0)',

        'coffee-0': 'var(--coffee-0)',
        'coffee-1': 'var(--coffee-1)',
        'coffee-2': 'var(--coffee-2)',
        'coffee-3': 'var(--coffee-3)',

        base: 'var(--base)',

        screen: 'var(--screen)',
        'screen-scrollbar': 'var(--screen-scrollbar)'
      }
    }
  },
  plugins: []
}
