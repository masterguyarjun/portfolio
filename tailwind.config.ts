import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary colors from logo
          blue: {
            primary: '#0B3D91',
            accent: '#00A3FF',
          },
          red: {
            primary: '#E11D2E',
          },
          gold: {
            accent: '#F5B800',
          },
          dark: {
            bg: '#0B0F1A',
            surface: '#1F2937',
            border: '#374151',
          },
          text: {
            primary: '#E5E7EB',
            secondary: '#94A3B8',
            muted: '#64748B',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-lg': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.35', fontWeight: '600' }],
        'heading-sm': ['clamp(0.875rem, 1.25vw, 1rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'space-1': '0.25rem',
        'space-2': '0.5rem',
        'space-3': '0.75rem',
        'space-4': '1rem',
        'space-5': '1.25rem',
        'space-6': '1.5rem',
        'space-8': '2rem',
        'space-10': '2.5rem',
        'space-12': '3rem',
        'space-16': '4rem',
        'space-20': '5rem',
        'space-24': '6rem',
        'space-32': '8rem',
      },
      borderRadius: {
        'radius-sm': '0.375rem',
        'radius-md': '0.5rem',
        'radius-lg': '0.75rem',
        'radius-xl': '1rem',
        'radius-2xl': '1.5rem',
      },
      boxShadow: {
        'shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'shadow-brand': '0 0 0 1px rgb(11 61 145 / 0.3), 0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'shadow-brand-hover': '0 0 0 1px rgb(11 61 145 / 0.5), 0 10px 15px -3px rgb(0 0 0 / 0.15)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0B3D91 0%, #00A3FF 100%)',
        'gradient-accent': 'linear-gradient(135deg, #E11D2E 0%, #F5B800 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0B0F1A 0%, #111827 100%)',
        'gradient-surface': 'linear-gradient(180deg, #1F2937 0%, #111827 100%)',
        'grid-pattern': 'linear-gradient(rgba(11, 61, 145, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 61, 145, 0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
    },
  },
  plugins: [],
};

export default config;
