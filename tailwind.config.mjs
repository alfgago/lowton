/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-270px * 4))" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(calc(-270px * 4))" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
