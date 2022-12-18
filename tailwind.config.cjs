/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./resources/js/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito"],
      },
      colors: {
        "primary-100": "#EBECF5",
        "primary-200": "#D8DAEC",
        "primary-300": "#AEB0C6",
        "primary-400": "#787A8E",
        "primary-500": "#363744",
        "primary-600": "#27283A",
        "primary-700": "#1B1C30",
        "primary-800": "#111227",
        "primary-900": "#0A0B20",

        "secondary-100": "#F9F3DD",
        "secondary-200": "#F4E7BD",
        "secondary-300": "#DECA94",
        "secondary-400": "#BEA56E",
        "secondary-500": "#937741",
        "secondary-600": "#7E602F",
        "secondary-700": "#694B20",
        "secondary-800": "#553814",
        "secondary-900": "#462A0C",

        "base-dark": "#121212",
        "base-light": "#E7E7E7",

        "surface-light": "#F7F7F7",
        "surface-dark": "#393939",
      },},
  },
  plugins: [],
}