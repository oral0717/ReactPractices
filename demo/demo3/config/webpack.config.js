const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: '../dist', // 告知 dev server,从什么位置查找文件,将 dist 目录下的文件 serve 到 localhost:8080 下,将资源作为 server 的可访问文件
  //   hot: true
  // },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
    // publicPath: '/'
  },
  plugins: [
    // 对于 CleanWebpackPlugin 的 v2 versions 以下版本，使用 new CleanWebpackPlugin(['dist/*'])
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      filename: '../dist/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}