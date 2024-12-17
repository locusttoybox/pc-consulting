/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontSize: {
        '5xl': [
          '4rem',
          {
            lineHeight: '4.5rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '4xl': [
          '2.5rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '3xl': [
          '2rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '1xl': [
          '1.25rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        secondary: [
          '1.25rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.02em',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  plugins: [],
}

