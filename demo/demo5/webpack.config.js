const path = require('path');
const webpack = require('webpack');




module.exports = {
  mode: 'development',

  entry: {
    pageOne: './src/pageOne.js',
    pageTwo: './src/pageTwo.js'
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }]
  }
}