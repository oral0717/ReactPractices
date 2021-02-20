const path = require('path');
const webpack = require('webpack');




const WorkboxWebpackPlugin = require('workbox-webpack-plugin');




module.exports = {
  mode: 'development',

  plugins: [new webpack.ProgressPlugin(), new WorkboxWebpackPlugin.GenerateSW({
          swDest: 'sw.js',
          clientsClaim: true,
          skipWaiting: false,
        })],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }]
  }
}