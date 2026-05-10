/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5fb87a',
          dark: '#4a9d63',
          light: '#7fca9a'
        },
        secondary: '#5a4fcf',
        dark: '#111111',
        darker: '#0a0a0a',
        light: '#fafafa',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#ebebeb',
          300: '#dbdbdb',
          400: '#cbcbcb',
          500: '#9e9e9e',
          600: '#757575',
          700: '#5a5a5a',
          800: '#404040',
          900: '#2a2a2a'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      animation: {
        'fadeInLeft': 'fadeInLeft 0.8s ease-out',
        'fadeOutLeft': 'fadeOutLeft 0.5s ease-out',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeIn': 'fadeIn 0.8s ease-out',
        'bubble': 'bubble 8s infinite ease-in-out',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-30px)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        bubble: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-100px) scale(1.1)', opacity: '0.3' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundSize: {
        '200%': '200%'
      }
    }
  },
  plugins: []
}
