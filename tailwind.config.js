module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '640px',
        lg: '1280px',
        xl: '1920px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
