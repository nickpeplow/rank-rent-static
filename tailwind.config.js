/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      colors: {
        primary: '#003966',
        'primary-2': '#05477a',
        softRed: '#ed3f3f',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: () => ({
        '24-seven': "url('../icons/24-seven.png')",
        'cta-line': "url('../icons/cta-line.jpg')",
        banner: "url('../images/banner.png')",
      }),
    },
  },
  plugins: [],
};
