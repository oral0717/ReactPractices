const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const serverEntry = require('../dist/server-entry').default
// const serverEntry = path.join(__dirname, '../dist/server-entry').default

const app = express()
const PORT = 3000

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

// 请求静态文件
app.use('/public/', express.static(path.join(__dirname, '../dist')))

// 浏览器中任何请求，都返回服务端渲染的代码
app.get('*', function(req, res){
  const appString = ReactSSR.renderToString(serverEntry)
  const tempStr = template.replace('<!--app-->',appString)
  res.send(tempStr)
})

app.listen(PORT, ()=>{
  console.log(`监听端口${PORT}开始`)
})