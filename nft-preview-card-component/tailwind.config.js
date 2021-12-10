module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        softBlue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        darkBlue: {
          100: 'hsl(215, 32%, 27%)',
          200: 'hsl(216, 50%, 16%)',
          300: 'hsl(217, 54%, 11%)',
        },
      },
    },
  },
  plugins: [],
};
