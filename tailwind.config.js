/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        // primary: "#2EBAC1",
        current: 'currentColor',
        primary: "#1877F2",
        secondary: "#292D32", //text
        third: "#a4d96c",
        text1: "#171725",
        text3: "#808191",
        borderGray: "#eee",
      },
    },
  },
  plugins: [],
};
