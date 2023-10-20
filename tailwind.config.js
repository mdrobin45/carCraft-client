/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#EF1D26",
         },
         fontFamily: {
            inter: "Inter, sans-serif",
         },
      },
   },
   plugins: [],
};
