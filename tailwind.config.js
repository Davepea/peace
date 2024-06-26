/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      xs: "300px",
      sm: "640px",
      md: "768px",
      xl: "1280px",
      ["2xl"]: "1530px" 
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'chillax': ['Chillax', 'sans-serif'],
        'clashDisplay': ['Clash Display', 'sans-serif'],
        'Archivo': ['Archivo', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
