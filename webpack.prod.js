const path = require("path");
const { merge } = require("webpack-merge");
const { commonConfig, getStyleLoaders } = require("./webpack.common.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const prodConfig = merge(commonConfig, {
  mode: "production",
  devtool: "cheap-module-source-map",
  output: {
    filename: "js/[name].[fullhash:8].js", // 打包后的文件名 [name] 为入口文件名
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "js/[name].[chunkhash:8].js",
    assetModuleFilename: "img/[contenthash:8][ext][query]",
    clean: true, // 清除上次打包的文件
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: getStyleLoaders(MiniCssExtractPlugin.loader),
      },
      {
        test: /\.scss$/i,
        use: getStyleLoaders(MiniCssExtractPlugin.loader, "sass-loader"),
      },
    ],
  },
  optimization: {
    minimizer: [
      // webpack5默认会用TerserPlugin压缩js，但是这里为了通过terser-webpack-plugin压缩css，所以需要出现配置
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"), // 源目录
          to: "", // 目标目录，默认为输出目录
          globOptions: {
            dot: true, // 包括隐藏文件
            ignore: ["**/index.html"], // 忽略复制的文件
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[fullhash:8].css",
    }),
  ],
});

// console.log("prodConfig", prodConfig);

module.exports = prodConfig;
