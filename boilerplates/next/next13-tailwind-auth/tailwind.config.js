/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-bg': 'var(--primary-bg)',
        'primary-text': 'var(--primary-text)',
        'primary-hover': 'var(--primary-hover)',
        'secondary-bg': 'var(--secondary-bg)',
        'secondary-text': 'var(--secondary-text)',
        'secondary-hover': 'var(--secondary-hover)'
      }
    }
  },
  plugins: []
};
