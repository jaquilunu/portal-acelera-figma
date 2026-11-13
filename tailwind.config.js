/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'system-ui', '-apple-system', 'sans-serif'],
        lexend: ['Lexend', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        acelera: {
          burgundy: '#511B35',
          wine: '#7A1845',
          magenta: '#B84469',
          berry: '#8B3A5A',
          rose: '#E8A0B8',
          pinkSoft: '#F5C6D8',
          blush: '#F7EEF2',
          blushLight: '#FAF2F5',
          blushPale: '#F5E9EF',
          impactBg: '#FDF4F7',
          bagagemBg: '#F9F4F6',
          footerBg: '#FAF8F9',
          teal: '#2A7A5F',
          tealDark: '#1B5E5A',
          tealLight: '#7ECDC8',
          tealPale: '#B2DFDC',
          mintBg: '#E8F5F0',
          charcoal: '#322D30',
          heroBody: '#3A2530',
          muted: '#62595E',
          caption: '#9C8A91',
          copyright: '#9E8C94',
          border: '#E4D9DE',
          borderPink: '#E8C8D5',
          borderCard: '#E3D9DE',
        },
      },
    },
  },
  plugins: [],
}

