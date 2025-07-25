/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3B82F6",
          dark: "#2563EB",
        },
        background: {
          light: "#ffffff",
          dark: "#111827",
        },
        text: {
          light: "#00000",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
