const express = require('express')
const ReactSSR = require('react-dom/server')
const serverEnter = require('../dist/server-entry').default

const app = express()

// 从浏览器发出的任何请求，都让它返回服务端渲染的代码，服务端代码在server-entry.js里，所有需要引入它
app.get('*', function(req,res){
  const appString = ReactSSR.renderToString(serverEnter)
  res.send(appString)
})

// 回调函数报告启动服务成功，启动命令放入package.json里
app.listen(3333, function(){
  console.log('server is listening on 3333')
})