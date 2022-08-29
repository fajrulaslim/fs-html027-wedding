/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        belle: ['Bellefair'],
        marce: ['Marcellus'],
        nautigal: ['The Nautigal'],
        grand: ['Grand Hotel'],
        quicksand: ['Quicksand'],
      },
      fontSize: {
        'button': ['13px'],
        'mobile': ['15px'],
        'exlarge': ['64px']
      },
      colors: {
        oldGreen: {
          500: '#54502b',
        },
        oldRose: {
          400: "#aa5d7b",
          500: "#9b606a",
        },
        grey: {
          100: '#888787',
        },
        brown: {
          100: '#c8bfb3'
        }
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-in forwards",
        fadeInUp: "fadeInUp 1.2s ease-in forwards",
        fadeInDown: "fadeInDown 1.2s ease-in forwards",
        fadeInLeft: "fadeInLeft 1.2s ease-in forwards",
        fadeInRight: "fadeInRight 1.2s ease-in forwards",
        zoomIn: "zoomIn 1.2s ease-in forwards",
        rotateIn: "rotateIn 1.2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: 'translateY(60px)' },
          "100%": { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: 'translateY(-60px)' },
          "100%": { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: 'translateX(-60px)' },
          "100%": { opacity: 1, transform: 'translateX(0)' }
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: 'translateX(60px)' },
          "100%": { opacity: 1, transform: 'translateX(0)' }
        },
        zoomIn: {
          "0%": { opacity: 0, transform: 'scale(0.5)' },
          "100%": { opacity: 1, transform: 'scale(1)' }
        },
        rotateIn: {
          "0%": { opacity: 0, transform: 'rotate(-180deg)' },
          "100%": { opacity: 1, transform: 'rotate(0deg)' }
        },
      },
      variants: {
        animation: ["motion-safe"]
      }
    },
  },
  plugins: [],
}
