/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#345FF6",
        secondary: "#D6E7FA",
      },
      fontSize: {
        heading_xl: "64px",
        heading_l: "48px",
        heading_m: "24px",
        heading_s: "20px",
        body_m: "16px",
        body_s: "14px",
      },

      lineHeight: {
        110: "110%",
      },
      letterSpacing: {
        "-3.2": "-3.2px",
      },
    },
  },
  plugins: [],
};
