const express = require('express')
const ReactDomServer = require('react-dom/server')
const fs = require('fs')
const path = require('path')

const isDev = process.env.NODE_ENV = 'development'

const app = express()
const PORT = 3000

if (!isDev){ // 线上环境
  const serverEntry = require('../dist/server-entry').default
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

  // 请求静态文件
  app.use('/public/', express.static(path.join(__dirname, '../dist')))

  // 浏览器中任何请求，都返回服务端渲染的代码
  app.get('*', function(req, res){
    const appString = ReactDomServer.renderToString(serverEntry)
    const tempStr = template.replace('<!--app-->',appString)
    res.send(tempStr)
  })
} else {// 开发环境，内容多，另放文件
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.listen(PORT, ()=>{
  console.log(`监听端口${PORT}开始`)
})