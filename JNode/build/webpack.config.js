const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js|jsx/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HTMLPlugin()
  ]
}