/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
      },
      keyframes: {
        spinVariable: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(720deg)' },
          '100%': { transform: 'rotate(1080deg)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

      },
      animation: {
        'spin-variable': 'spinVariable 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}