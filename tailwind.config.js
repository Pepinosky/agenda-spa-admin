module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Antic: ["Helvetica", "Arial", "Lucida", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    
    require("@tailwindcss/forms"),
  ],
};
