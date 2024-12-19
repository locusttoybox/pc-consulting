import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        subtle: '0 2px 4px rgba(0, 0, 0, 0.08)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // A more complex example
        inset: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        fahkwang: ['"Fahkwang"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      fontSize: {
        '6xl': [
          '3.75rem',
          {
            lineHeight: '4.5rem',
            fontWeight: '500',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '500',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '500',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
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
} satisfies Config;
