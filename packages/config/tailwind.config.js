// https://dev.to/scriptmint/multicolor-theme-setup-with-tailwind-css-1odd
import colors from 'tailwindcss/colors'

function setupConfig(props = {}) {
  return {
    ...props,
    content: [
      '../../packages/ui/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    daisyui: {
      base: true, // applies background color and foreground color for root element by default
      darkTheme: 'dark', // name of one of the included themes for dark mode
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      themes: ['light', 'night'],
    },
    theme: {
      extend: {
        animation: {
          blink: 'blink 1s step-end infinite',
          bounce: 'bounce 1s infinite',
          'fade-out': 'fade-out 2500ms ease-in-out visibility 0s',
          'fade-in': 'fade-in 2500ms ease-in-out',
          'slide-down': 'slide-down 250ms ease-in-out',
          'slide-up': 'slide-up 250ms ease-in-out',
          'slide-right': 'slide-right 250ms ease-in-out',
          'slide-left': 'slide-left 250ms ease-in-out',
          'overlay-show': 'overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          'content-show': 'content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);',
          wiggle: 'wiggle 200ms ease-in-out',
        },
        colors: {
          primary: colors.purple,
          secondary: colors.pink,
        },
        keyframes: {
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
          'content-show': {
            from: {
              opacity: 0,
              transform: 'translate(-50%, -48%) scale(0.96)',
            },
            to: {
              opacity: 1,
              transform: 'translate(-50%, -50%) scale(1)',
            },
          },
          'overlay-show': {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
          'slide-up': {
            from: {
              opacity: 0,
              transform: 'translateY(2px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
          'slide-right': {
            from: {
              opacity: 0,
              transform: 'translateX(-2px)',
            },
            to: {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
          'slide-down': {
            from: {
              opacity: 0,
              transform: 'translateY(-2px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
          'slide-left': {
            from: {
              opacity: 0,
              transform: 'translateX(2px)',
            },
            to: {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
        },
        listStyleType: {
          square: 'square',
          roman: 'upper-roman',
          alpha: 'lower-alpha',
        },
        transitionProperty: {
          position: 'right, left, top, bottom, margin, padding',
          textColor: 'color',
        },
        zIndex: {
          1: '1',
          5: '5',
          '-1': '-1',
        },
      },
    },
    plugins: [require('daisyui'), require('tailwind-scrollbar')],
    variants: {
      scrollbar: ['dark'],
    },
  }
}

// module.exports = setupConfig

export default setupConfig
