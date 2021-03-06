const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');




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

  entry: {
    pageOne: './src/scripts/pageOne.js',
    pageTwo: './src/scripts/pageTwo.js'
  },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  devServer: {
    publicPath: ''
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename:'main.[contenthash].css' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'xx3 ',
      // filename: '../public/index.html'
      filename: '../dist/index.html'
    })
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'src/scripts')],
      loader: 'babel-loader'
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