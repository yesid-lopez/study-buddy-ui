import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'gray-light': '#f4f4f4',
      gray: '#959597',
      'gray-dark': '#8f8e93',
      'orange-light': '#FFD5AE',
      orange: '#FFB15D',
      'orange-dark': '#FF6E00',
      'orange-darker': '#7D3200',
      'green-light': '#CBF2C7',
      green: '#97DF92',
      'green-dark': '#47C442',
      'green-darker': '#005800',
      'blue-light': '#A1EEFF',
      blue: '#53CCFD',
      'blue-dark': '#00B8FF',
      'blue-darker': '#00588A',
      'violet-light': '#EAE4F6',
      violet: '#B69EEA',
      'violet-dark': '#8C80FF',
      'violet-darker': '#12094B',
      'red-light': '#FFC5C7',
      red: '#FF0000',
      'red-dark': '#FF0000',
      'red-darker': '#7F0000'
    }
  },
  plugins: []
}
export default config
