const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: process.env.DEV_PROT,
    proxy: {},
    client: {
      progress: true,
    },
    hot: true,
  },
  output: {},
});
