/** @type {import('tailwindcss').Config} */
const {
  fontSize,
  letterSpacing,
} = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ['./src/**/*.svelte'],
  content: ['./src/**/*.svelte'],
  theme: {
    fontSize: {
      ...fontSize,
      "xxs": "10px",
      "4xxl": "2.5rem",
    },
    letterSpacing: {
      ...letterSpacing,
      "wide-1em": "0.01em",
    },
    extend: {
      lineHeight: {
        'tighter': '1.2',
      },
      boxShadow: {
        "t-xl": "0 15px 35px 0 rgba(60, 66, 87, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.12)",
        "t-xxl": "0 24px 54px -8px rgb(50 50 93 / 25%), 0 16px 32px -14px rgb(0 0 0 / 30%)",
      },
      maxWidth: {
        "base": "480px",
        "3xxl": "800px",
      },
    },
  },
  plugins: [],
}
