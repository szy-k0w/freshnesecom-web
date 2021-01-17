const path = require("path");

module.exports = {
  siteMetadata: {
    title: "freshnesecom-web",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@assets": path.join(__dirname, "src/assets"),
        "@components": path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
  ],
};
