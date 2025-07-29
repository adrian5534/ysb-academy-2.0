module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'selective-yellow': 'hsl(57, 87%, 63%)',
        'selective-purple': 'hsl(278, 58%, 38%)',
        'selective-lightyellow': 'hsl(57, 87%, 85%)',
        'eerie-black-1': 'hsl(0, 0%, 9%)',
        'eerie-black-2': 'hsl(180, 3%, 7%)',
        'quick-silver': 'hsl(0, 0%, 65%)',
        'radical-red': 'hsl(351, 83%, 61%)',
        'light-gray': 'hsl(0, 0%, 80%)',
        'isabelline': 'hsl(36, 33%, 94%)',
        'gray-x-11': 'hsl(0, 0%, 73%)',
        'platinum': 'hsl(0, 0%, 90%)',
        'gray-web': 'hsl(0, 0%, 50%)',
        'kappel': 'hsl(170, 75%, 41%)',
        'black-80': 'hsla(0, 0%, 0%, 0.8)',
        'white-50': 'hsla(0, 0%, 100%, 0.5)',
        'black-50': 'hsla(0, 0%, 0%, 0.5)',
        'black-30': 'hsla(0, 0%, 0%, 0.3)',
        'white': 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'ysb-gradient': 'linear-gradient(90deg, rgba(112,41,153,1) 45%, rgba(243,235,79,1) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
    require('daisyui'),
  ],
}