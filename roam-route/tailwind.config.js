/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
            },
            colors: {

                beige: "#EADAC1",
                dark: "#383833",
                accent: "#77866B",
                soft: "#F2EFE6",
            },
        },
    },
    plugins: [],
}