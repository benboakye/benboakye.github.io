/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0D1117',
        surface: '#161B22',
        'surface-soft': '#1C2333',
        primary: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
        },
        accent: {
          DEFAULT: '#22D3EE',
          green: '#22C55E',
        },
        'text-main': '#E6EDF3',
        'text-muted': '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(124, 58, 237, 0.35)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.25)',
      },
    },
  },
  plugins: [],
};
