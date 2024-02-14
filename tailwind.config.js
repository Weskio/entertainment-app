/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:{
      colors: {
        'active-red':'#FC4747',
        'bg-dark':'#10141E',
        'dark-gray':'#5A698F',
        'dark-blue':'#161D2F',
        'text-cyan':' hsl(180, 29%, 50%)'
      }
    },

    
  },
  plugins: [
  ],
}