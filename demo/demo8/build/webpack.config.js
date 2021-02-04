const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');




/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');




module.exports = {
  mode: 'development',
  entry: './src/scripts/index.js',
  devServer: {
    contentBase: './dist', // 告知 dev server,从什么位置查找文件
    hot: true,
    proxy:[{
      context: ['/BdPageA', '/BdPageB'],         // 要代理的接口
      target: "http://localhost:8080",
      pathRewrite: {
        "^/BdPageA":"",
        "^/BdPageB":""
      }, // 处理转换
    }]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(), // 每次编译删除dist
    new MiniCssExtractPlugin({ filename:'style.[contenthash].css' }),
    new HtmlWebpackPlugin({
      title: 'react项目1',
      filename: 'index.html',
      template: path.join(__dirname,'../src/scripts/template.html')
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /.(sa|sc|c)ss$/,

      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  }
}