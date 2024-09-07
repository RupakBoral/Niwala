/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-bg': "url('/images/contact-us-bg.jpg')",
        'about-bg': "url('/images/about-bg.jpg')",
      },
    },
  },
  plugins: [],
}