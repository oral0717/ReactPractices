const axios = require('axios')
const ReactDomServer = require('react-dom/server')
const path = require('path')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const proxy = require('http-proxy-middleware')
const serverConfig = require('../../build/webpack.config.server')

const mfs = new MemoryFs()

const getTemplate =()=>{
  return new Promise((resolve, reject)=>{
    axios.get('http://localhost:8889/public/index.html')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}

const serverCompiler = webpack(serverConfig)
const Module = module.constructor
serverCompiler.outputFileSystem = mfs
let serverBundle

serverCompiler.watch({},(err, stats)=>{ // stats是打包时输出的信息
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.log(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )
  const bundle = mfs.readFileSync(bundlePath, 'utf-8') // string内容，不是可以使用的html模块内容，接下来需要把string内容转为html模块

  const m = new Module()
  m._compile(bundle, 'server-entry.js')//指定文件名
  serverBundle = m.exports.default
})

module.exports = function(app) {
  app.use('/public', proxy.createProxyMiddleware({
    target: 'http://localhost:8889'
  }))

  app.get('*', function(req, res) {
    getTemplate().then((template)=>{
      const content = ReactDomServer.renderToString(serverBundle)
      res.send(template.replace('<!--app-->', content))
    })
  })
}