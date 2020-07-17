const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        // test is regular expression
        test: /.scss$/,
        use: [
          "style-loader", // 3. inject stypes into DOM
          "css-loader", //2. turns css into commonjs
          "sass-loader", //1. turns sass into css
        ],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
});
