/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black_with_opacity': 'rgba(51,51,51,255)',
        'white': 'rgba(255,255,255,255)',
        'red': 'rgb(248, 20, 20)',
      },
      dropShadow: {
        'red': [
          '4px 4px 8px rgba(128, 0, 128, 1)',
          '-4px -4px 8px rgba(255, 0, 0, 1)'
        ],
        'white': [
          '2px 2px 4px rgba(255,255,255,255)', 
          '-2px -2px 4px rgba(255,255,255,255)'
        ]
      },
      backgroundImage: {
        'undertale': 'url("/images/background.png")'
      }
    },
  },
  plugins: [],
}
