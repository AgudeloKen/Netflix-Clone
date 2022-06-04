module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url(../assets/netflixbg.jpeg)",
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
      },
      colors: {
        bop: "rgba(0,0,0, 0.6)",
        button: "rgba(111,111,111, 0.7)",
        nav: "#111",
        github: "#171515",
        facebook: "#3b5998",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
