/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008000", // Mengubah warna primary menjadi hijau
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui"), require("tailwindcss-highlights")],
};
