/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabinet Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      borderRadius: {
        'clay': '24px',
        'clay-sm': '16px',
        'clay-lg': '32px',
        'clay-xl': '40px',
        'pill': '9999px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        clay: {
          yellow: '#FFE566',
          pink: '#FFB3E6',
          green: '#A8F0C6',
          blue: '#A8D8FF',
          purple: '#D4BAFF',
          orange: '#FFD0A8',
          red: '#FFB3B3',
          bg: '#F0EEF8',
          dark: '#1a1625',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      boxShadow: {
        'clay-sm': '0 2px 0 rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
        'clay': '0 4px 0 rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.10), inset 0 2px 0 rgba(255,255,255,0.7)',
        'clay-lg': '0 6px 0 rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.8)',
        'clay-xl': '0 8px 0 rgba(0,0,0,0.14), 0 24px 60px rgba(0,0,0,0.14), inset 0 3px 0 rgba(255,255,255,0.9)',
        'clay-hover': '0 12px 0 rgba(0,0,0,0.14), 0 32px 60px rgba(0,0,0,0.16), inset 0 3px 0 rgba(255,255,255,0.9)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradientShift 5s ease infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}