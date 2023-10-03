/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**'],
  theme: {
    extend: {
      scale: {
        101: '1.01',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
