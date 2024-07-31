import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: "rgba(163, 120, 255, 0.1)",
          DEFAULT: '#A378FF'
        },
        lines: {
          DEFAULT: '#E6ECEE'
        },
        btnBg: {
          DEFAULT: '#171717'
        },
        btnsBg: {
          DEFAULT: '#C5F1A3'
        },
        btnBg3: {
          DEFAULT: '#F7FBFC'
        },
        // Add more custom colors here
      },
      borderRadius: {
        'custom': '5px',
      },
      container: {
        center: true,
        padding: '10px',
      },
      screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1300px',
  
        'xl': '1300px',
  
        '2xl': '1680px',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'serif'],
        // Add more custom font families here
      },
    },
  },
  plugins: [],
};
export default config;
