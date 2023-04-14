const path = require('path');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  entry: path.join(__dirname, "src/client/js/app.js"),
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: "./dist",
    },
    proxy: {
      "/evaluate": "http://localhost:8080",
    },
  },
});