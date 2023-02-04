/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      mont: ["Montserrat"],
    },
    extend: {
      boxShadow: {
        "bt-yl": "0px 0px 8px 0px rgba(240,203,21,1);",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        smooth:
          "linear-gradient(90deg, rgba(0,0,0,1) 30%, rgba(13,13,14,0.7525603991596639) 40%, rgba(82,85,91,0.409983368347339) 70%)",
      },
      scale: {
        14: ".14",
      },
      animation: {
        fade: "fadeIn 5s ease-out",
      },

      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      }),
    },
  },
  plugins: [],
};
