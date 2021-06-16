const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'] // 后缀名自动补全
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.join(__dirname, '../node_modules') // 排除文件夹
        ],
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            presets: ['@babel/preset-react', '@babel/preset-env'],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/template.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '',
    host: '127.0.0.1',
    port: 3000
  }
}