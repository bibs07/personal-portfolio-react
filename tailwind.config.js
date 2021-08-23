module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
       ...theme('colors'),
       'button': '#AFA2FF',
       'nav': '#b6ddfa',
       'nav1': '#E9F1F7',
       'form': '#fdf7ff',
       'footer': '#FFDF64',
  }),
  variants: {
    extend: {},
  },
  plugins: [],
}
}