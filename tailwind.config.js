const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: ['light', 'night'],
  },

  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.pink,
      },
      transitionProperty: {
        position: 'right, left, top, bottom, margin, padding',
        textColor: 'color',
      },
      keyframes: () => ({
        'fade-out': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        blink: {
          '0%, 100%': { color: 'transparent' },
          '50%': { color: 'inherit' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      }),
      animation: {
        'fade-out': 'fade-out 250ms ease-in-out',
        'fade-in': 'fade-in 250ms ease-in-out',
        blink: 'blink 1s step-end infinite',
        bounce: 'bounce 1s infinite',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('daisyui')],
  variants: {
    scrollbar: ['dark'],
  },
}
