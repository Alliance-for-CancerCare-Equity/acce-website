/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5C8FF9',
        'primary-light': '#e6ebf4',
        'secondary': '#F3F4F6',
        'secondary-dark': '#f7f8fa',
        'anchor': '#5C8FF9',
        'background-effects': '#DDE7FB',
        'header': '#000',
        'header-light': '#EBF1FC',
        'text': '#282828',
        'deactive': '#ababab',
        'text-dark': '#dddddd',
        'text-light': '#4d4d4d',
        'white': '#fff',
        'gray': '#fcfcfc',
        'cyan': '#808080',
        'cyan-dark': '#f3f3f3',
        'cyan-light': '#5f5f5f',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        secondary: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        base: '1rem',
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      letterSpacing: {
        base: '0.5px',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
}

