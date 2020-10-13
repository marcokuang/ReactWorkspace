const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // tell webpack we will build a bundle for nodeJS
  target: "node",

  // the root file of server app
  entry: "./src/index.js",

  // output folder for the generated files
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
