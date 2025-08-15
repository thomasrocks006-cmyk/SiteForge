/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5b5ed3',
        surface: '#ffffff',
        ink: '#1a1a1a',
        subtle: '#6b7280',
        accent: '#0891b2'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.1)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
}