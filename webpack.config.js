const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js", // 打包后的文件名 [name] 为入口文件名
    path: path.resolve(__dirname, "dist"),
    clean: true, // 清除上次打包的文件
  },
  devServer: {
    static: "./dist", // 静态文件目录
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/i,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new VueLoaderPlugin(),
  ],
};
