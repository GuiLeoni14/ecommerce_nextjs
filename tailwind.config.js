/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                purple: {
                    400: '#4B2995',
                    200: '#EBE5F9',
                },
                yellow: {
                    200: '#F1E9C9',
                    600: '#C47F17',
                },
            },
        },
    },
    plugins: [],
};
