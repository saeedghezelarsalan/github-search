/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1f2328',
        'mist': '#656D76',
        'Azure': '#0969DA',
      },
      height: {
        'sidebar': 'calc(100vh - 69px)',
      },
    },
    screens: {
      'sm': '768px',
      'md': '1112px',
      'lg': '1440px',
    },
  },
  plugins: [],
}