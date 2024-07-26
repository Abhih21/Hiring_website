/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-sidebar": "#D7DDFA",
        "custom-text": "#7C8493",
        "custom-grey": "#898989",
        "custom-container": "#D9D9D9",
      },
    },
  },
  mode: "jit",
  // plugins: [require('daisyui')],
};
