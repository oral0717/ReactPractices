<!-- 项目目录 demo -->
[https://webpack.docschina.org/guides/getting-started/]
demo4 支持PWA，即渐进式web app，使web app具有原生app相近的用户体验
demo5 多bundles,多入口，默认dist，支持es6
      不支持PWA
      不支持webpack-dev-server
      未指定样式语言
demo6 多bundles,多入口，默认dist，支持es6
      指定sass,webpack-dev-server,简化创建的HTML文件
      不支持PWA
### 初级webpack项目
分支：demo/demo3/webpack-project-init
1. 新建目录 demo1
2. 进入demo1
cd demo1
npm init
3. 安装webpack webpack-cli，
yarn add webpack -D // 安装webpack默认版本 5.12.3
yarn add webpack-cli -D //  如果你使用 webpack v4+ 版本，你还需要安装 CLI
4. 初始化一个webpack项目
npx webpack-cli init // 初始化一个webpack项目；会提醒安装 @webpack-cli/init
                     // 安装好 @webpack-cli/init 后执行 webpack init，生成 webpack.config.js 文件
5. npx webpack --config webpack.config.js // 执行打包，--config后指定webpack.config.js
6. 替换5, 代替npx命令：
"scripts": {
  "build": "webpack"
}
npm run build

### webpack中管理资源
分支：demo/demo3/webpack-project-assets
*** 加载css ***
<!-- 模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。链会逆序执行。第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。最后，webpack 期望链中的最后的 loader 返回 JavaScript。
应保证 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后。如果不遵守此约定，webpack 可能会抛出错误。 -->
1. npm install --save-dev style-loader css-loader
2. webpack.config.js增加配置
```js
module.exports = {
  modules: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}
```

### webpack管理输出
分支：demo/demo3/webpack-project-output
多入口代码分离
```js
// npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// npm install --save-dev clean-webpack-plugin  清理插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin(), // 删除dist文件夹
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // 不想在 watch 触发增量构建后删除 index.html 文件
    new HtmlWebpackPlugin({
      title: '管理输出',
      filename: 'index.html',
      template: path.join(__dirname,'../src/scripts/template.html') // 以template为模板生成dist/index.html
    }),
  ],
}
// 通过命令删除 "clean": "rm -rf dist/*",  yarn clean 删除dist目录
```

### webpack开发环境
分支：demo/demo3/webpack-project-development
```js
// webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 devServer 配置中的 publicPath 选项进行修改。
// 自动编译代码：webpack-dev-server, npm install webpack-dev-server --save-dev
module.export = {
  mode: 'development',
  devtool: 'source-map', // 选择一种source-map增强调试体验
  devServer: {
    contentBase: './dist', // 告知 dev server,从什么位置查找文件
  },
}
"scripts": {
  "watch": "webpack --watch", // yarn watch如果其中一个文件被更新，代码将被重新编译，所以你不必再去手动运行整个构建
  "build": "webpack --config ./config/webpack.config.js",
  "start:dev": "webpack serve --config config/webpack.config.js" // npm install webpack-dev-server --save-dev; yarn start:dev 如果其中一个文件被更新，代码将被重新编译，编译后浏览器自动刷新
},

// npm install --save-dev express webpack-dev-middleware
// 如果你在技术选型中使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，请使用 webpack-hot-middleware 依赖包，以在你的自定义服务器或应用程序上启用 HMR。
// server.js
const express = require('express')
const webpack= require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./config/webpack.config.js')
const compiler = webpack(config)

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)

app.listen(1988, function() {
  console.log('listen1 to 1988')
})

// npm install webpack-dev-server --save-dev
// server/devServer.js
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../config/webpack.config.js');
const options = {
  contentBase: '../dist',
  hot: true,
  host: 'localhost',
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
// "devServer:dev": "nodemon ./server/devServer.js" 执行 yarn devServer:dev
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}
```
### react中热更新 react-hot-loader
```js
// yarn add -D react-hot-loader
// .babelrc 补充：
// "plugins": ["react-hot-loader/babel"]
// App.js文件：
import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => <div>Hello World!</div>;

export default hot(module)(App);
```

### 代码分离
分支：demo/demo3/F0001-webpack-codeSplitting
代码分离方法：
入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 Entry dependencies 或者 SplitChunksPlugin 去重和分离 chunk。
动态导入：通过模块的内联函数调用来分离代码。
todo: 实战

### 环境变量设置
webpack 命令行 环境配置 的 --env 参数，可以允许你传入任意数量的环境变量。而在 webpack.config.js 中可以访问到这些环境变量。
--env production
--env NODE_ENV=local（NODE_ENV 通常约定用于定义环境类型）

npx webpack --env NODE_ENV=local --env production --progress
如果设置 env 变量，却没有赋值，--env production 默认表示将 env.production 设置为 true。还有许多其他可以使用的语法。
通常，module.exports 指向配置对象。要使用 env 变量，你必须将 module.exports 转换成一个函数：











