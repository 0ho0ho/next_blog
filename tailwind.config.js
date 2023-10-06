/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**'],
  theme: {
    extend: {
      scale: {
        101: '1.01',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideRight: 'slideRight 0.2s',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
