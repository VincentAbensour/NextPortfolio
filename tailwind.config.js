/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'chatlog': "url('../public/projects/chat-login.png')",
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      colors:{
        customdarkblue:"#0f0f24",
        customclearblue: "#4985ca",
        customwhite: "#faebd7",
        custombluegrey:"#23293d",
        customtexthighlight: "#00FFD5",
        customheader: "#ffffff1a",
        gradientblue:"rgba(130,255,234)",
        gradientgreen:"rgb(0, 255, 130)"
      },
    },
  },
  plugins: [],
}

