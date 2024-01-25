const { merge } = require("webpack-merge");
const { commonConfig, getStyleLoaders } = require("./webpack.common.js");

/** @type {import('webpack').Configuration} */
module.exports = merge(commonConfig, {
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: getStyleLoaders("style-loader"),
      },
      {
        test: /\.scss$/i,
        use: getStyleLoaders("style-loader", "sass-loader"),
      },
    ],
  },
});
