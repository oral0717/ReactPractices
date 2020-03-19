const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackConfigBase = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(webpackConfigBase, {
  entry: {
    app: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html')
    })
  ]
})

if (isDev) {
  config.entry = {
    app: [ // entry是数组，包含多个文件，打包到一个文件里
      'react-hot-loader/patch',
      path.join(__dirname, '../client/index.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: 8888,
    contentBase: path.join(__dirname, '../dist'),// 告诉服务器从哪里提供内容
    publicPath: '/public',// 此路径下的打包文件可在浏览器中访问。
    historyApiFallback: { // 任意的 404 响应都可能需要被替代为 index.html
      index: '/public/index.html'
    },
    hot: true
  }
  config.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config