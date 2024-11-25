/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backColor: '#72A126', // 自定义颜色
      },
    },
  },
  plugins: [],
}