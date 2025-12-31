const withOpacity = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#0b0f1a',
        card: 'rgba(255,255,255,0.04)',
        outline: 'rgba(148,163,184,0.35)',
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
        glow: '0 10px 50px rgba(124, 255, 225, 0.08)'
      },
      backgroundImage: {
        grid: 'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
