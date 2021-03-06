module.exports = {
  "presets": [
    ["@babel/preset-env"],
    ["@babel/preset-react"],
    "react-app"
  ],
  "plugins": [
    ['@babel/plugin-proposal-decorators', {'legacy': true}],
    ['@babel/plugin-proposal-class-properties', {'loose': true}],
    "react-hot-loader/babel"
  ]
}