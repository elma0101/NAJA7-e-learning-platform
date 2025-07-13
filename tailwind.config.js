/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all TS/JS files in src
  ],
  theme: {
    extend: {
      // Here we extend the default theme
      colors: {
        'primary-green': '#10B981',  
        'primary-green-dark': '#059669',
        'dark-text': '#1F2937',
        'medium-text': '#4B5563',
        'light-text': '#6B7280',
      },
      fontFamily: {
        // Set Poppins as the default font
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}