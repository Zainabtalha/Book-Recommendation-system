/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        sans:["proppins","sans-serif"],
        cursive:["whisper", "cursive"]
      },
      colors:{
        primary: "#395886",
        secondary:"#006DA4",
        brandDark: "#B1C9EF"
        // ABDBE6

      },
      container:{
        //  center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
        },
      }
      
    },
  },
  plugins: [],
};

