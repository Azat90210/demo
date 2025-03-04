const { heroui } = require('@heroui/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#131314',
        secondary: '#131314CC',
        default: '#13131466',
      },
      textColor: {
        primary: '#131314',
        secondary: '#131314CC',
        default: '#13131466',
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          extend: 'light',
          colors: {
            background: '#FFFFFF',
            neutral: '#13131466',
            foreground: '#131314',
            primary: '#131314',
            secondary: '#131314CC',
            default: '#13131466',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
}
