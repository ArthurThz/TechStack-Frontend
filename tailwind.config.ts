import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'green-wallpaper':"linear-gradient(to right, rgb(28, 28, 28, 95%), rgb(28, 28, 28, 60%)),url('../public/gray-wallpaper.jpg')"
      },
      colors:{
        'woodsmoke': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1c1c1c',
      },
      'green-haze': {
        '50': '#f0f9f4',
        '100': '#daf1e2',
        '200': '#b8e2c9',
        '300': '#89cca9',
        '400': '#57b084',
        '500': '#37996b',
        '600': '#257652',
        '700': '#1d5f43',
        '800': '#1a4b36',
        '900': '#163e2e',
        '950': '#0b231a',
    },
    'secondary-btn':'#3d3d3d',
    'primary-btn':'#37996b'
    
      
      },
      screens:{
        'galaxy':'412px',
        'iphonexr':'414px'
      }
      
    },
  },
  plugins: [],
}
export default config
