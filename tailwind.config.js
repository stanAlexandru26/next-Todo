/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        light_veryLightGrey: 'hsl(0, 0%, 98%)',
        light_veryLightGreyBlue: 'hsl(236, 33%, 92%)',
        light_lightGreyBlue: 'hsl(233, 11%, 84%)',
        light_darkGreyBlue: 'hsl(236, 9%, 61%)',
        light_veryDarkGreyBlue: 'hsl(236, 19%, 35%)',
        dark_veryDarkBlue: 'hsl(235, 21%, 11%)',
        dark_veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        dark_lightGreyBlue: 'hsl(234, 39%, 85%)',
        dark_lightGreyBlueHover: 'hsl(236, 33%, 92%)',
        dark_darkGreyBlue: 'hsl(234, 11%, 52%)',
        dark_veryDarkGreyBlue: 'hsl(233, 14%, 35%)',
        dark_veryDarkGreyBlue2: 'hsl(237, 14%, 26%)',
        brightBlue: 'hsl(220, 98%, 61%)',
        gradientCyan: 'hsl(192, 100%, 67%)',
        gradientPurple: 'hsl(280, 87%, 65%)',
      },
      backgroundImage: {
        background_desktop_dark: 'url(/images/bg-desktop-dark.jpg)',
        background_desktop_light: 'url(/images/bg-desktop-light.jpg)',
        background_mobile_dark: 'url(/images/bg-mobile-dark.jpg)',
        background_mobile_light: 'url(/images/bg-mobile-light.jpg)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
