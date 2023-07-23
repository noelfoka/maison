/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-500": "#6d737a",
        "gray-black": "#1b1d1f",
        "primary-50": "#edeff6",
        "gray-700": "#363a3d",
        "primary-500": "#4a60a1",
        gray: "rgba(0, 0, 0, 0.5)",
        darkgray: "#9c9c9c",
        slategray: "#576074",
        darkslategray: "#434343",
        "gray-400": "#889099",
        "primary-800": "#1e2640",
        "gray-white": "#fff",
        whitesmoke: "#eaeaea",
        gainsboro: "rgba(226, 226, 226, 0.1)",
        "primary-700": "#2c3a61",
        "primary-400": "#6e80b4",
      },
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        "body-large-400": "Inter",
        "components-input-text": "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      "21xl": "40px",
      "xs-6": "11.6px",
      "2xs-8": "10.8px",
      "sm-6": "13.6px",
      "mini-5": "14.5px",
      "33xl": "52px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
