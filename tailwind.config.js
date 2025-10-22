/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"'],
      },
      container: {
        center: true,
        padding: '16px',
        screens: {
          ssm: '576px',
          sm: '768px',
          md: '992px',
          lg: '1200px', 
        },
      },
      colors: {
        brand: {
          DEFAULT: '#00D3D3', 
          navy: '#081580',
          cyan: '#00B6DD',
          pink: '#FF77A8',
          gray: '#D3D8E4',
          bg: '#010101',
        },
        dark: '#0A0A0A',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,.06)',
      },
      borderRadius: {
        sm: '2px', 
      },
      letterSpacing: {
        tightish: '0.8px', 
        wideish: '1.2px',  
      },
    },
    screens: {
      xs: '0px',
      ssm: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
    },
  },
  plugins: [],
}
