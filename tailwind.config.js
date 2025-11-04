/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        graphite: {
          50: '#f6f6f7',
          100: '#e1e2e5',
          200: '#c3c5cb',
          300: '#9ea1ab',
          400: '#7a7d8a',
          500: '#5f626f',
          600: '#4b4d58',
          700: '#3f4149',
          800: '#36383e',
          900: '#2f3036',
          950: '#1a1b1f',
        },
        // Variant 1: Neon Purple
        neonPurple: {
          DEFAULT: '#7A3FFF',
          light: '#9B6AFF',
          dark: '#5A1FDF',
          glow: 'rgba(122, 63, 255, 0.5)',
        },
        // Variant 2: Electric Green
        electricGreen: {
          DEFAULT: '#00FF9D',
          light: '#33FFAE',
          dark: '#00CC7D',
          glow: 'rgba(0, 255, 157, 0.5)',
        },
        // Variant 3: Amber Orange
        amberOrange: {
          DEFAULT: '#FF8A00',
          light: '#FFA333',
          dark: '#CC6E00',
          glow: 'rgba(255, 138, 0, 0.5)',
        },
        // Variant 4: Lime Accent
        limeAccent: {
          DEFAULT: '#C8FF00',
          light: '#D4FF33',
          dark: '#A0CC00',
          glow: 'rgba(200, 255, 0, 0.5)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '100%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' },
        },
      },
    },
  },
  plugins: [],
}
