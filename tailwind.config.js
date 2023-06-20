/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-rajdhani)',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebe',
          200: '#9e9e9e',
          300: '#727272',
          400: '#565656',
          500: '#212121',
          600: '#202020',
          700: '#1f1f1f',
          800: '#181818',
          900: '#121212',
        },
        red: {
          50: '#F75049',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
