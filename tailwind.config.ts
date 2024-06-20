import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#39E058",
        "primary-80": "rgba(65, 240, 100, 1)",
        secondary: "#1D4875",
        "secondary-80": "rgba(40, 80, 130, 1)",
        tertiary: "#DEF2FF",
        neutral: "#647899",
        monokai: "#131313",
        "monokai-faded": "#161616",
        input: "#F4F4F4",
        "contrast-base": "#474747",
      },
      boxShadow: {
        "custom-black": "0 0 5px rgba(0, 0, 0, 0.1)",
        "custom-white": "0 0 5px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
