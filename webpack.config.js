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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
    new VueLoaderPlugin(), // 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
  ],
};
