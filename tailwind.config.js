/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
