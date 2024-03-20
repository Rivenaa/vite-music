/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      spacing: {
        7.5: '30px', // 添加自定义间距
        12.5: '50px',
        13: '52px'
      },
      backfaceVisibility: {
        hidden: 'hidden'
      },
      colors: {
        background: '#222',
        'background-d': 'rgba(0, 0, 0, 0.3)',
        'highlight-background': '#333',
        'dialog-background': '#666',
        theme: '#ffcd32',
        'theme-d': 'rgba(255, 205, 49, 0.5)',
        'sub-theme': '#d93f30',
        text: '#fff',
        'text-d': 'rgba(255, 255, 255, 0.3)',
        'text-l': 'rgba(255, 255, 255, 0.5)',
        'text-ll': 'rgba(255, 255, 255, 0.8)'
      },
      fontSize: {
        0: 0,
        'small-s': '10px',
        small: '12px',
        medium: '14px',
        'medium-x': '16px',
        large: '18px',
        'large-x': '22px'
      },
      lineHeight: {
        custom: '44px'
      },
      translate: {
        '-1/2': '-50%'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.transform-translate3d-0': {
          transform: 'translate3d(0, 0, 0)'
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden'
        },
        '.translate-z-1px': {
          transform: 'translateZ(1px)'
        },
        '.translate-x-(-50%)': {
          transform: 'translateX(-50%)'
        }
      }
      addUtilities(newUtilities)
    })
  ]
}
