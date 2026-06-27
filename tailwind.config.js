/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sable: '#F7F3EC',
        creme: '#EFE7D8',
        dore: '#A98A4B',
        doreClair: '#D9C9A3',
        brun: '#3E3424',
        brunClair: '#7A6A4F',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
