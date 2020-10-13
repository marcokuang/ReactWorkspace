const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const config = {
  // Note: for client codes we don't need to specify the node server environment
  // target: "node",

  // the root file of client app becomes the entry point for webpack
  entry: "./src/client/client.js",

  // output folder for the generated files
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
