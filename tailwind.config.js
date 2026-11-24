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
        background: "#09090b",
        foreground: "#fafafa",
        primary: {
          DEFAULT: "#f59e0b",
          foreground: "#000000",
        },
        card: "#18181b",
        border: "#27272a",
      },
    },
  },
  plugins: [],
};

