const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackConfigBase = require('./webpack.config.base')

module.exports = webpackMerge(webpackConfigBase, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../server/client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  }
})