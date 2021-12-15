module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        primaryBlue: 'hsl(246, 80%, 60%)',
        work: 'hsl(15, 100%, 70%)',
        play: 'hsl(195, 74%, 62%)',
        study: 'hsl(348, 100%, 68%)',
        exercise: 'hsl(145, 58%, 55%)',
        social: 'hsl(264, 64%, 52%)',
        selfcare: 'hsl(43, 84%, 65%)',
        neturalBlue: {
          900: 'hsl(226, 43%, 10%)',
          800: 'hsl(235, 46%, 20%)',
          700: 'hsl(235, 45%, 61%)',
          600: 'hsl(236, 100%, 87%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
