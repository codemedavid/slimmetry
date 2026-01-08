/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SLIMMETRY Clean Metabolic Wellness Theme
        'theme-bg': '#FFFFFF',           // Clean White (backgrounds)
        'theme-text': '#3A3A3A',          // Charcoal (text)
        'theme-accent': '#2CA6A4',        // Fresh Teal Blue (accent)
        'theme-accent-hover': '#248F8D',  // Darker Teal (hover states)
        'theme-secondary': '#F4F6F8',     // Light Gray (sections)
        'text-secondary': '#6B7280',      // Gray (secondary text)

        // Primary - Deep Science Blue
        'deep-blue': {
          50: '#E6EEF3',
          100: '#CDDDE7',
          200: '#9BBBCF',
          300: '#6999B7',
          400: '#37779F',
          500: '#0B3A5A',
          600: '#092E48',
          700: '#072336',
          800: '#051724',
          900: '#020C12',
        },

        // Secondary - Fresh Teal Blue
        teal: {
          50: '#E8F7F7',
          100: '#D1EFEF',
          200: '#A3DFDF',
          300: '#75CFCF',
          400: '#47BFBF',
          500: '#2CA6A4',
          600: '#238583',
          700: '#1A6462',
          800: '#114241',
          900: '#082121',
        },

        // Accent - Natural Leaf Green
        'leaf-green': {
          50: '#F0F9ED',
          100: '#E1F3DB',
          200: '#C3E7B7',
          300: '#A5DB93',
          400: '#87CF6F',
          500: '#7BC26A',
          600: '#629B55',
          700: '#4A7440',
          800: '#314E2A',
          900: '#192715',
        },

        // Soft Accents
        'sky-blue': {
          50: '#F5FBFC',
          100: '#EBF7F9',
          200: '#D7EFF3',
          300: '#C3E7ED',
          400: '#AFDFE7',
          500: '#A8DCE6',
          600: '#86B0B8',
          700: '#65848A',
          800: '#43585C',
          900: '#222C2E',
        },
        'sage': {
          50: '#F8FCF8',
          100: '#F1F9F2',
          200: '#E3F3E5',
          300: '#D5EDD8',
          400: '#C7E7CB',
          500: '#CFE8D1',
          600: '#A5BAA7',
          700: '#7C8B7D',
          800: '#525D53',
          900: '#292E2A',
        },

        // Legacy compatibility - mapped to new theme
        primary: {
          50: '#E8F7F7',
          100: '#D1EFEF',
          200: '#A3DFDF',
          300: '#75CFCF',
          400: '#47BFBF',
          500: '#2CA6A4',
          600: '#238583',
          700: '#1A6462',
          800: '#114241',
          900: '#082121',
        },
        accent: {
          light: '#A8DCE6',
          DEFAULT: '#2CA6A4',
          dark: '#238583',
        },
        charcoal: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#3A3A3A',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(11, 58, 90, 0.05)',
        'medium': '0 4px 25px rgba(11, 58, 90, 0.08)',
        'hover': '0 8px 35px rgba(11, 58, 90, 0.12)',
        'glow': '0 0 20px rgba(44, 166, 164, 0.15)',
        'glow-lg': '0 0 40px rgba(44, 166, 164, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(44, 166, 164, 0.05)',
        'premium': '0 25px 50px -12px rgba(11, 58, 90, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 25px -5px rgba(11, 58, 90, 0.1), 0 8px 10px -6px rgba(11, 58, 90, 0.05)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(44, 166, 164, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(44, 166, 164, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(44, 166, 164, 0.1), transparent)',
        'gradient-wellness': 'linear-gradient(135deg, #0B3A5A 0%, #2CA6A4 50%, #7BC26A 100%)',
      },
      borderRadius: {
        'wellness': '8px',
      },
    },
  },
  plugins: [],
}
