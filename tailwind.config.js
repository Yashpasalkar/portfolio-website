/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [   // 👈 add this if some classes are missing
    'text-center',
    'justify-center',
    'items-center',
    'justify-between',
    'justify-around',
    'mx-auto'
  ],
  plugins: [],
}
