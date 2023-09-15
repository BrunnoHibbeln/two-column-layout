/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': 'hsl(238, 22%, 44%)',
        blue: 'hsl(224, 93%, 58%)',
        'dark-blue': 'hsl(243, 87%, 12%)',
        green: 'hsl(170, 45%, 43%)',
        grayish: 'hsl(240, 75%, 98%)',
        gray: 'hsl(0, 0%, 75%)',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        'open-sans': ['var(--font-open-sans)'],
      },
      fontSize: {
        body: '1rem',
      },
    },
  },
  plugins: [],
}
