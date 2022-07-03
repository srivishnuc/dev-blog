const { red } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            primary: '#34d399',
            secondary: '#e2e8f0',
            error: '#ef4444',
        }
    },
    plugins: [],
}
