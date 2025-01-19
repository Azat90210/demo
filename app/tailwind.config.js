module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {fontFamily: {
      sans: ['Suisse Intl', 'Arial', 'sans-serif'],
      textColor: {
        primary: "#8F8F8F",
        secondary: "#8F8F8F",

      },
      colors: {
        background: "#181c20",
        bottomMenuBackground: "#1c1c1c",
        // must be a little bit brighter than background
        modalBackground: "#343d46",
        defaultNeutral: "#6c727a",
      },
       animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        gradient: "gradient 8s linear infinite",
      },
      },
    },
  },
  plugins: [],
}
