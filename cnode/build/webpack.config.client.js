const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base.js')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge.merge(webpackBase, {
  entry: {
    app: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname,'../client/template.html'),
      filename: 'index.html'
    })
  ]
})

if(isDev){
  // 入口
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/index.js')
    ]
  }
  // devServer
  config.devServer = {
    host: '127.0.0.1',
    port: '8654',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  // plugins
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config