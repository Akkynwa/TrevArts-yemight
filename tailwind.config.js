/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'TrevArts': '#f53513ff',
        'apechain': '#0054FA',
        'primary': '#f53513ff', // Add primary color for MusicPlayer
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'marquee': 'marquee 25s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}