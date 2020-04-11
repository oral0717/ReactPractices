const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfigBase = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules/')
        ]
      }, {
        test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
            },{
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: path.join(__dirname, './postcss.config.js')
                }
              }
            }
          ]
        ,
        exclude: [
          path.join(__dirname, '../node_modules/')
        ]
      }, {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/public',
          allChunks: true
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(path.join(__dirname, '../dist'))
  ]
}

module.exports = webpackConfigBase