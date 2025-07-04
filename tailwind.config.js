/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app/globals.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-alexandria)",
          "var(--font-ibm-plex-arabic)",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
