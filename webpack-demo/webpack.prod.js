const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        // test is regular expression
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. extract css into separate file
          "css-loader", //2. turns css into commonjs
          "sass-loader", //1. turns sass into css
        ],
      },
    ],
  },
  output: {
    filename: "[name]-[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
});
