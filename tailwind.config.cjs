const withOpacity = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#0c0c11',
        card: 'rgba(255,255,255,0.04)',
        outline: 'rgba(255,255,255,0.12)',
        accent: withOpacity('--color-accent'),
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
        tertiary: withOpacity('--color-tertiary')
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        glow: '0 10px 50px rgba(167, 139, 250, 0.12)'
      },
      backgroundImage: {
        grid: 'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
