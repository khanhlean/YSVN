/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      bg1: "#000e29",
      spacing: {
        128: "32rem",
        160: "40rem",
        256: "64rem",
      },
      colors: {
        "ys-lightblue": "#ECF2FE",
        "ys-blue": "#0066b3",
        "ys-orange": "#FF5500",
      },
    },
  },
  plugins: [],
};
