/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],

   daisyui: {
      themes: [
         {
            mytheme: {
               primary: '#000000',

               secondary: '#8ac7d8',

               accent: '#2eb28a',

               neutral: '#2C242D',

               'base-100': '#F1F0F5',

               info: '#76C5E5',

               success: '#5CE0B6',

               warning: '#9F840F',

               error: '#E97799',
            },
         },
      ],
   },
   plugins: [require('daisyui')],
};
