import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Lato', ...defaultTheme.fontFamily.sans],
        'body': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary' : '#2a1b3d',
        'primary-light': '#392454',
        'primary-lighter': '#472F65',
        'primary-dark': '#221631',
        'primary-darker': '#1D122A',
        'secondary' : '#d83f87',
        'tertiary' : '#E98074',
      },
      typography: {
        DEFAULT: {
          css: {
            
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
        'dark': {
          css: {
            color: '#fff',
          }
        }
      },
    },
  },
  plugins: [
    typography
  ],
}
export default config
