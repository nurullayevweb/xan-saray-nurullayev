/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        container: "1200px;",
        hero:"1240px"
      },
      fontFamily:{
        inter:"Inter, sans-serif"
      },
      padding:{
        25:"100px"
      },
      backgroundColor:{
        "xan-saray":"#FBF8F3",
        "primarys":"#A67C36",
      },
      colors:{
        "xan-dark": "#0C0904",
        "primarys":"#A67C36",
      },
      borderColor:{
        "burger-stroke":"#DDDCDA"
      },
      gap:{
        15:"60px",
        "2.5":"10px"
      },
      borderRadius:{
        img:"20px",
        btn:"50px"
      },
      rotate:{
        9:"-9deg"
      },
      width:{
        "w48":"46%"
      },
    },
  },
  plugins: [],
}

