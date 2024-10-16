/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-primary-light)',
          main: 'var(--color-primary-main)',
          dark: 'var(--color-primary-dark)',
        },
        neutral: {
          main: 'var(--color-title-home)',
        },
        paper: {
          gray: 'var(--color-bg-box-currency)',
          main: 'var(--color-bg-card)',
        },
      },
      boxShadow: {
        base: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      sm: '600px',
      md: '1200px',
      lg: '1400px',
      xl: '1600px',
      xxl: '1920px',
      desktop: '99999px',
      laptop: '1535px',
      tablet: '1279px',
      mobile: '767px',
    },
  },
  plugins: [],
};
