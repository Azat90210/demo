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
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '16px',
        lg: '16px',
        xl: '16px',
        '2xl': '16px',
      },
      screens: {
        // Экран в дизайне 360px, ширина контейнера 320px
        sm: '320px',
        // Экран в дизайне 640px, ширина контейнера 600px
        md: '600px',
        // Экран в дизайне 1024px, ширина контейнера 980px
        lg: '980px',
        // Экран в дизайне 1440px, ширина контейнера 1261px
        xl: '1261px',
        // Для экранов больше 1536px
        '2xl': '1536px',
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
            foreground: '##BAFC00',
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
