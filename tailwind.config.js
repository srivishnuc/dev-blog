const { red } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            primary: '#E1C16E',
            secondary: '#1e3a8a',
            error: '#ef4444',
        }
    },
    plugins: [],
}
