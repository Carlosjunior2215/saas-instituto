import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#1a1a1a',
          700: '#0f0f0f',
          800: '#000000',
          900: '#000000',
        },
        secondary: {
          50: '#fffbf0',
          100: '#fff8e1',
          200: '#ffe9a8',
          300: '#ffd966',
          400: '#ffc107',
          500: '#ffaa00',
          600: '#ff9800',
          700: '#f57f17',
          800: '#e65100',
          900: '#bf360c',
        },
        background: '#0a0a0a',
        text: '#e8e8e8',
        muted: '#a0a0a0',
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'sm-elegant': '0 1px 2px 0 rgba(255, 193, 7, 0.1)',
        'md-elegant': '0 4px 6px -1px rgba(255, 193, 7, 0.15), 0 2px 4px -1px rgba(255, 193, 7, 0.1)',
        'lg-elegant': '0 10px 15px -3px rgba(255, 193, 7, 0.2), 0 4px 6px -2px rgba(255, 193, 7, 0.1)',
        'xl-elegant': '0 20px 25px -5px rgba(255, 193, 7, 0.2), 0 10px 10px -5px rgba(255, 193, 7, 0.15)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'base': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
