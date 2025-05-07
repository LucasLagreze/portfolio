module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Couleur principale : vert
        primary: {
          light: "#6EE7B7",
          DEFAULT: "#10B981",
          dark: "#047857"
        },
        // Couleur secondaire : jaune
        secondary: {
          light: "#FEF3C7",
          DEFAULT: "#FBBF24",
          dark: "#B45309"
        }
      }
    }
  },
  plugins: []
};