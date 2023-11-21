/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom screen size lower than 'sm'
        sm: "640px", // Default 'sm' breakpoint
        md: "768px", // Default 'md' breakpoint
        lg: "1024px", // Default 'lg' breakpoint
        xl: "1280px", // Default 'xl' breakpoint
      },
      colors: {
        darkGray: "#363636",
        darkerGray: "#262626",
        lighterGray: "#A8A8A8",
      },
      animation: {
        "fade-in": "fade-in .1s ease-in-out",
      },
    },
  },
  plugins: [],
};
