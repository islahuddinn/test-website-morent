/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D6E4FD",
          200: "#AEC8FC",
          300: "#85A8F8",
          400: "#658DF1",
          500: "#3563E9",
          600: "#264BC8",
          700: "#1A37A7",
          800: "#102587",
          900: "#0A196F",
        },
        secondary: {
          100: "#E0E9F4",
          200: "#C3D4E9",
          300: "#90A3BF",
          400: "#596780",
          500: "#1A202C",
          600: "#131825",
          700: "#0D121F",
          800: "#080C19",
          900: "#040815",
        },
        information: {
          100: "#DCF3FF",
          200: "#BAE5FF",
          300: "#98D3FF",
          400: "#7EC2FF",
          500: "#54A6FF",
          600: "#3D81DB",
          700: "#2A60B7",
          800: "#1A4393",
          900: "#102E7A",
        },
      },
    },
  },
  plugins: [],
};
