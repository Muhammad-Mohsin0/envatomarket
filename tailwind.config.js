/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg":
          "url('/src/assets/wp2901668-new-york-at-night-wallpapers.jpg')",
        "delivery-bg":
          "url('/src/assets/1920-ai-generated-fast-delivery-advertisment-background-with-copy-space.jpg')",
      },
    },
  },
  plugins: [],
};
