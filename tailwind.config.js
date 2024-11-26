/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        backColor: '#72A126', // 自定义颜色
      },
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin") // Require only if you want to use FlyonUI JS component
  ]
}