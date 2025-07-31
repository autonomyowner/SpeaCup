/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-radiance': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'her-fierceness': '#651b38',
        'whisky-cola': '#761a3a',
        'beet-red': '#84193b',
        'castro': '#531c37',
        'blackberry': '#471932',
        'black-hearted': '#361830',
        'melanzane': '#362036',
        'elegant': {
          50: '#fefefe',
          100: '#fdfcfc',
          200: '#faf8f8',
          300: '#f5f2f2',
          400: '#ede8e8',
          500: '#d8d0d0',
          600: '#b8a9a9',
          700: '#9a8a8a',
          800: '#7f7171',
          900: '#6a5f5f',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
} 