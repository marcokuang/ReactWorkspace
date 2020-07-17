const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/index.js",
    catApp: "./src/app/catApp/index.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "app",
      filename: "index.html",
      template: "./src/template.html",
      chunks: ["app"],
      // excludeChunks: "catApp",
    }),
    new HtmlWebpackPlugin({
      title: "cat-clicker",
      filename: "cat.html",
      template: "./src/catClickerTemplate.html",
      chunks: ["catApp"],
      // excludeChunks: "app",
    }),
  ],
  module: {
    rules: [
      {
        test: /.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
