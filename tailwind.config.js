/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0F',
        grille: '#1C1C24',
        static: '#F5F5F7',
        signal: {
          DEFAULT: '#FF3D5A',
          400: '#FF5C74',
          500: '#FF3D5A',
          600: '#E62A47',
        },
        pulse: {
          DEFAULT: '#7C5CFF',
          400: '#9479FF',
          500: '#7C5CFF',
          600: '#6644EB',
        },
        ink: {
          950: '#0A0A0F',
          900: '#121218',
          850: '#1C1C24',
          800: '#24242E',
          700: '#2E2E3A',
          600: '#454552',
          500: '#6B6B7A',
          400: '#9A9AA8',
          300: '#C4C4CE',
          200: '#E2E2E8',
          100: '#F5F5F7',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
};
