module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        floatAround: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(20px, 10px)' },
          '75%': { transform: 'translate(-10px, 20px)' },
        },
      },
      animation: {
        floatAround: 'floatAround 6s ease-in-out infinite',
      },
    },
  },
}