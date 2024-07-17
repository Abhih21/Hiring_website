/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-sidebar': '#D7DDFA',
        'custom-text': '#7C8493',
        'custom-grey': '#898989',

      },
    },
  },
  mode:'jit',
  plugins: [],
}

