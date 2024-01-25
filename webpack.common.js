const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESlintWebpackPlugin = require("eslint-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const getStyleLoaders = (extractCss, preProcessor) => {
  return [
    extractCss,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [["autoprefixer"]],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};

/** @type {import('webpack').Configuration} */
const commonConfig = {
  entry: "./src/main.js",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset", // asset type 会根据 maxSize 自动选择 "asset/resource" | "asset/inline"
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb,
          },
          // 也可以使用函数
          // dataUrlCondition: (source, { filename, module }) => {
          //   console.log("module", module);
          // },
        },
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
      title: "Webpack 5.0 + Vue 2.7.x",
    }),
    new ESlintWebpackPlugin({
      context: path.resolve(__dirname, "src"),
      exclude: ["node_modules"],
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "node_modules/.cache/.eslintcache",
      ),
    }),
    new VueLoaderPlugin(), // 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
  ],
};

module.exports = {
  commonConfig,
  getStyleLoaders,
};
