/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        xss: '388px',
        xs: '500px',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        orangeColor: 'var(--orange)',
        softRed: 'var(--red)',
        greenColor: 'var(--green)',
        whiteColor: 'var(--white)',
        blackColor: 'var(--black)',
        grayLight: 'var(--gray)',
        yellowColor: 'var(--yellow)',
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-400': 'var(--gray-400)',
        overlay: 'var(--overlay)',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: () => ({
        '24-seven': "url('../icons/24-seven.png')",
        banner: "url('../images/banner.png')",
        'cta-bg': "url('../images/cta-bg.png')",
        'statistic-bg': "url('../images/statistic-bg.png')",
      }),
    },
  },
  plugins: [],
};
