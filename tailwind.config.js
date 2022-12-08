// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    'brandy-rose': {
      '50': '#fbf9f9',
      '100': '#f8f3f3',
      '200': '#ece0e0',
      '300': '#e1cece',
      '400': '#cba9a9',
      '500': '#b48484',
      '600': '#a27777',
      '700': '#876363',
      '800': '#6c4f4f',
      '900': '#584141'
    },


    screens: {
      ss: "320px",
      // => @media (min-width: 640px) { ... }

      sm: "375px",
      sl: "425px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1536px) { ... }
    },


    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },

    },


    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "false",
    },
  }
}