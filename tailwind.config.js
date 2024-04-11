/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        appBigGap: ['60px'],
        appMediumGap: ['30px'],
        appSmallGap: ['20px'],
        appExtraSmallGap: ['20px'],
      },
      colors: {
        appPrimaryColor: '#5F5D9C',
        appSecondayColor: '#6196A6',
        appWhiteColor: '#fff',
      },
      fontSize: {
        appHeader: ['24px'],
      },
    },
  },
  plugins: [],
};
