1. webpack将离散的静态资源拼凑成适用于线上使用的资源
2. 要求控制好开发到上线流程：
3. 你会使用React服务端渲染吗？
使用React或Vue后，所有html内容都是通过js在浏览器中进行生成的，缺点：
seo不友好；首屏时间较长，用户体验不好
React服务端渲染诞生，带来前后端同构可能
服务端渲染考虑问题：路由跳转，数据同步，seo信息，如何在开发时方便的进行服务端渲染的测试

4.前端工程架构学习
demo使用https://cnodejs.org开放API

5.demo介绍：
工程架构:
webpack配置
node配置
服务端渲染基础

项目架构：
React
react-router配置
Mobx配置（代替redux）数据层方案
服务端渲染优化

业务开发：
页面开发
登录服务

项目部署：
PM2
Nginx
一键部署

6.学习到：
服务端渲染的难点以及如何解决
React + React-router + Mobx的项目架构模式

7.技术准备
es6
react基础用法
基本的node.js知识
基本的webpack知识

8.
单页应用：所有页面内容都是前端生成的
    js发请求拿数据，承担更多的业务逻辑，后端只提供API
    页面路由跳转不需要经过后端，路由改变后由前端来改变页面数据 ，浏览器不用刷新
多页应用：所有内容是服务端模板生成
    浏览器发请求请求页面
    页面跳转要经过后端，服务端生成新的html返回给浏览器展示
    js只是做做动画

9.前端技术选型
多页应用时：
jquery, 不适用于单页应用
mootools
yUI

架构工具，无特定的前端工具，主要配合后端
Grunt：注册任务的脚本处理器，从硬盘读写，执行速度慢，被npm代替
gulp：代替grunt,api少，被npm代替

模块化工具：
seajs,cmd规范
requirejs,amd规范

静态文件处理：
用gulp或grunt等工具手动编译到html中，自由度低（根据文件分析路径关系），操作复杂，
或者甚至不处理，交给后端，让ngix缓存机制处理，让后端处理

10.
单页应用：
React，jsx,单项数据流，从上往下传数据
Vue, .vue文件，双向绑定数据，模仿react, vux学习redux
Angular2,ts开发，生态系统目前不完整

架构工具
npm
bower
jspm,面向未来，前端类库独立，开发和上线不用打包，用http2

模块化工具
webpack，webpack2+加入按需加载包
rollup,强大，打包效率比webpck高，按需加载包，
browserify,用得少，不宜用于单页应用

静态文件处理
可以直接在js中引用，并交由模块化工具转化成线上可用的静态资源，并可以定制转化过程适应不同的需求场景

11.技术选型其他考虑因素
浏览器兼容性
toB还是toC
移动端还是PC端

12.WebApp架构简介 P2-1
工程架构：
  解决重复工作，解放生产力，精力放到业务代码中：
      源代码预处理，
      自动打包，自动更新页面显示，
      自动处理图片依赖，保证开发和正式环境的统一
  围绕解决方案搭建环境
      不用的前端框架需要不同的运行架构
      预期可能出现的问题并规避
  保证项目质量
      code lint规范写法
      不同环境中排除差异，通过code lint排除或编辑器自身设置，如设置.editorconfig
      git commit预处理

项目架构：
  技术选型
  数据解决方案（redux,mobx）
  整体代码风格

web 开发常用网络优化 （P2-2）
  优化方法：
    合并资源文件，减少http请求，浏览器有http请求数量限制
    压缩资源文件减少请求大小
    利用缓存机制，尽可能使用缓存减少请求
//////////
13.P2-3
webpack模块打包器，核心loader机制，webpack通过loader去处理指定的某些类型文件
创立项目：
1.新项目空目录下npm init,将当前项目配置成npm项目，然后可以安装很多npm包，webpack即npm包之一，会生成一个package.json文件，
配置项目里需要的npm包生成package.json中keywords作用是：当项目发布到npm上后，npm通过keywords搜索这个项目
2.安装webpack: npm i webpack              或者 yarn add webpack
    webpack@4.41.5;出现了package-lock.json 或者  yarn.lock
3.安装react: npm i react  或者  yarn add react
    react@16.12.0
4.根目录下增加build文件夹：放配置文件，webpack的config文件，工程里需要的脚本文件
5.build里增加
    webpack.config.js，配置webpack内容
    生成新文件命令：touch webpack.config.js
5.根目录下增加client文件夹：放前端应用文件
6.client里增加
    app.js  //应用入口，将来放到html文件里
    App.jsx  //声明整个应用的页面内容
7.配置webpack.config.js
const path = require('path')
module.exports = {
    entry:{// 指明app.js是打包入口，根据app.js里依赖关系，一层层迭代下去，将整个依赖树打包成一个js
        app:path.join(__dirname,'../client/app.js')
    },
    output:{
        filename:'[name].[hash].js', // []里是变量，name代表entry下对应一项的key名字，hash名字会因任何js文件改变而变
        path:path.join(__dirname,'../dist'), //指明输出文件存放位置
        publicPath:'/public/' // 静态资源文件引用时的路径（在html里引用时）如/public/app.hash.js，区分一个url是静态文件还是api请求等
    }
}
到此，可以在app.js里写入js内容，进行打包
在package.json里scripts加入: "build": "webpack --config build/webpack.config.js"// webpack --config 后面置顶config文件
执行 npm run build
可以看到生成dist/打包文件

//////////////
14.P2-4
1.App.jsx写入内容
2.配置webpack.config.js使webpack可以识别jsx文件
module: {
    rules: [
        {
            test: /\.jsx$/, //哪种类型文件需要使用相应的loader
            loader: 'babel-loader'//loader改为use,是开发型工具，安装放入devDependencies，bebel-loader仅是个插件，不含有核心代码还需要补充安装babel-core, npm i babel-loader -D或yarn add -D babel-loader
        }
    ]
}
3.babel默认编译es6代码，不能识别jsx，需要配置支持，根目录加入babel配置文件.babelrc
{
    "presets": [// 代表babel支持的语法，由于js版本语法众多：es678/jsx等，babel默认把支持这些语法拆分出去，babel-core默认没有指定现在写的代码是支持哪个语言版本的，所以需要配置文件在此处配置
        ["es2015", {"loose":true}],
        "react"
    ]
}
配置好以后需要安装指定包：npm i babel-preset-es2015 babel-preset-es2015-loose babel-preset-react -D
4.步骤3中，由于webpack版本4+，.babelrc配置改为：
{
  "presets": [
    ["@babel/preset-env"],
    ["@babel/preset-react"]
  ]
}
安装包改为：npm i babel-loader @babel/core @babel/preset-env @babel/preset-react -D
此时可以成功编译jsx

5.在浏览器里打开页面
安装 npm i html-webpack-plugin -D
webpack.config.js里加入 const HTMLPlugin = require('html-webpack-plugin')
plugins: [
    new HTMLPlugin() //生成html页面，把entry里的打包内容注入该html文件里，名字及路径根据output配置得来
]
执行npm run build，得到dist/index.html
由于此时没有开启服务器及文件映射，目前的index.html里的文件不能访问相关js
可以将output中的publicPath:''置空，index.html即可加载打包的js

.js文件中也涉及相关jsx语句，需要在webpack.config.js中增加loader:
{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: [ //要排除node_modules中的js文件
        path.join(__dirname, '../node_modules')
    ]
}
再次执行npm run build构建项目，新index.html即可以展示相关内容

//////////////
15.P2-5
服务端渲染的配置

1.为什么会有服务端渲染?
单页应用存在的问题：
    seo不友好；浏览器端渲染html内容，引擎爬虫抓取内容时不会执行js，根据url请求到网页，加载的是个空白html
    首次请求等待时间较长，体验不好

react构建完成的app在node环境中进行渲染过程，得到html内容，浏览器得到的内容已经是html内容，解决上述两个问题

2.
react-dom是React为web端开发的渲染工具，用render方法渲染组件
react-dom/server提供将react组件渲染成html 的方法

3.
服务端node环境里没有document,window对象，服务端渲染时，<App/>没法放入document中
需要建立server-entry.js ,把需要在服务端渲染出来的内容export,
在服务端渲染时需要使用server-entry.js，但是不能在服务端直接执行server-entry.js，因其实jsx;需要打包该文件

创建build/webpack.config.server.js,配置打包服务端文件
module.exports = {
  target: 'node',// 打包出来的js文件将在哪种环境中执行，node(nodejs环境)/web(浏览器)等
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',//服务端无缓存概念，且此文件名以后会被引用，名字不用hash
    path: path.join(__dirname, '../dist'),
    publicPath: '',
    libraryTarget: 'commonjs2'// 打包出来的js使用的模块方案，有umd,cmd(seajs)，amd(requirejs),global
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
      ,{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  }
}
为方便起见，将package.json中"scripts"修改：
"scripts":{
    "build:client": "webpack --config build/webpack.config.client.js",
    "build:server": "webpack --config build/webpack.config.server.js",
    "clear": "rimraf dist",//删除整个dist目录，保证每次打包文件都最新的.rimraf 是nodejs的一个很小的包，需要安装，专用来删除文件夹
    "build": "npm run clear && npm run build:client && npm run build:server"
}
执行 npm run build 执行打包，dist出现三个文件，打包以后，可以在服务端使用打包的模块
dist/server-entry.js是server端node的打包文件可以看到开头用module.exports导出模块
dist/app.(hash).js是client的打包结果文件，是个自执行的方法

4.mkdir server //根目录新建文件夹server,
 touch server/server.js //增加文件server.js,写入nodejs服务

 npm i express -S // 服务端使用express框架
 const express = require('express')
 const app = express()

编辑server.js,将express等引入
启动服务命令放入package.json里，"start": "node server/server.js"

const serverEnter = require('../dist/server-entry').default// 一定要加default，服务端里用的commonjs2规范，没有解构 export default的内容

至此实现了简单的服务端渲染配置，但是目前只是渲染出了server-entry.js里的内容，没有渲染出前端业务js
需要继续实现：
服务端渲染出的内容要插入到html的body里，再把整个内容返回浏览器端

5.服务端渲染出的内容要插入到html的body里，再把整个内容返回浏览器端
touch client/template.html 新建文件
  <div id="root">// 业务代码放在这个id下
    <!--app-->//客户端/服务端渲染的时候，会被业务代码替换掉
  </div>
template.html使用方式：
    1.修改webpack.config.client.js
    plugins:[
        new HTMLPlugin([
            //dist下生成的html文件index.html会以template.html作为模板插入生成的js
            template: path.join(__dirname,'../client/template.html')
        ])
    ]
    2.server端，需要把生成html文件index.html读进来
    server.js内修改：
    const fs = require('fs')
    const path = require('path')
    // 读取打包文件，指定‘utf8’才会读出string格式，否则是buffer
    const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')
    // 处理静态文件请求
    app.use('/public',express.static(path.join(__dirname,'../dist')))
    app.get('*',function(req,res){
        res.send(template.replace('<!--app-->',appString))
    })

    reactDOM里原本使用ReactDOM.render()方法，
    react16版本使用ReactDOM.hydrate()在客户端js里渲染客户端内容，
    如果需要使用服务端渲染代码，react会对比服务端和客户端生成的代码，
    如果有差别，它认为服务端代码有问题，会使用客户端新生成的代码替换掉服务端生成的内容

    修改了文件以后一定要先编译npm run build，再重新启动服务器npm start

///////////
16.P2-6 项目开发时的常用配置
    1.新建分支feature-add-react：
    git branch//查看所有分支
    git checkout -b feature-add-react//新建分支并切换到该新分支
    git push origin feature-add-react//新分支push远程
    git branch --set-upstream-to=origin/feature-add-react feature-add-react//关联本地与远程分支
    git pull

    git checkout master
    git merge feature-add-react
    git push

    2.常用配置
    webpack-dev-server //webpack官方插件，通过webpack的配置启动服务器，方便访问所有文件，
                       //编译时文件存在于内存中，文件发生改动时，服务器自动执行编译过程，
                       //不需要手动执行编译,就可以在浏览器器中看到变化
    hot-module-replacement // 文件代码改变时，浏览器无刷新改变内容，不用重新获取数据

    修改配置：webpack.config.client.js
    const isDev = process.env.NODE_ENV === 'development'// 启动命令时手动输入告知当前环境

    if(isDev){
        config.devServer = { //webpack所有配置 http://webpack.js.org/configuration/dev-server/
            host: '0.0.0.0', //本地开发，代表可以用任何方式访问，指向本机IP访问方式：如'127.0.0.1'，也可以使用'localhost'，也可以使用本机IP访问；
                             // 如果这里配置上'localhost'或'127.0.0.1'，当在局域网开发时，别人想连此电脑调试时，无法访问
            port: '8888',
            contentBase: path.join(__dirname,'../dist'),//告诉服务器从哪里提供内容;启动服务器为了访问编译的静态文件，这里要配置output的path
            hot: true,//启动Hot module replacement
            overlay: {//当编译出现错误时，网页上出现弹窗，提示出错
                errors:true//在error时出现，也可以设置warnings
            },
            publicPath: '/public/',// 此路径下的打包文件可在浏览器中访问; config里output里的对应
            historyApiFallback: {// 配置对应关系，使所有404请求都返回index.html
                index: '/public/index.html'
            }
        }
    }

    npm i webpack-dev-server -D
    设置package.js中的"scripts":
    "dev:client": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.client.js"
    // cross-env NODE_ENV=development 启动webpack时候这里告知是开发环境
    // cross-env包，需要安装，用来解决mac,window上的设置环境变量时的差异
    // npm i cross-env -D

    启动服务器：
    // npm run dev:client

17.P2-7 配置hot-module-replacement
    hot-module-replacement // 文件代码改变时，浏览器无刷新改变内容，不用重新获取数据

    1.babelrc里添加配置：
    "plugins": ["react-hot-loader/babel"]
        // npm i react-hot-loader@next -D 包，提供React的hot-module-replacement功能的工具
        // react-hot-loader@next 安装最新版
        // babel ，表示使用babel的情况下使用hot-module-replacement功能

    2.修改app.js
    增加：
    import { AppContainer } from 'react-hot-loader' // AppContainer用来包裹根节点需要渲染的实际html内容
    //ReactDOM.hydrate(<App/>,document.getElementById('root'))
    const root = document.getElementById('root')
    const render = (Component) => {
        ReactDOM.hydrate(
            <AppContainer>
                <Component />
            </AppContainer>,
            root
        )
    }
    render(App)

    if(module.hot){
        module.hot.accept('./App.jsx', ()=>{
            const NextApp = require('./App.jsx').default
            //ReactDOM.hydrate(<NextApp/>,document.getElementById('root'))
            render(NextApp)
        })
    }


    3.在webpack.config.js里if(isDev)里加入
    config.entry = {
        app: [// entry是数组，包含多个文件，打包到一个文件里
            'react-hot-loader/patch',//客户端热更新代码时需要用到的部分
            path.join(__dirname,'../client/app.js)
        ]
    }
    hot:true
    config.plugins.push(new webpack.HotModuleReplacementPlugin())// 这个插件是在webpack里，需要引入webpack
    const webpack = require('webpack')

////////////

## 17.P2-8开发时的服务端渲染
### 思路
1. 服务端渲染，也需要分开发环境与非开发环境
2. 非开发环境需要从dist目录下获取文件，开发环境下没有打包目录dist
3. 开发环境需要从内存中读取打包文件，文件地址要根据配置文件output拼出来
4. 开发环境内容较多，单独放在一个文件里 server/util/dev-static.js，被server/server.js里引用

### 基本处理
 1. server.js
    需要判断是否是开发环境
    const isDev = process.env.NODE_ENV === 'development'
    if (!isDev) { //非开发环境
        // express.static处理硬盘上的静态文件
        // 但是开发环境中，静态文件没有存入硬盘，而是在内存里，所以需要设置代理
    } else { // 开发环境，需要的东西都放在util文件夹里
        const devStatic = require('./util/dev-static')
        devServer(app)
    }

 2. 补充开发环境下服务器渲染部分：
	mkdir server/util   // 由于内容太多，单独新建文件夹存放，未来这里会放很多东西
	touch server/util dev-static.js

 3. mode设置，放在webpack.config.server.js,webpack.config.client.js
	mode: "development"

### 编辑server/util/dev-static.js
1. 获取根组件打包文件，即包含所有页面组件，会用来注入模板html
2. 获取模板html打包文件
3. res.send(模板html打包文件)

#### 获取模板html打包文件：
	// 通过webpack-dev-server实时从内存里拿最新的template文件
	const axios = require('axios') // cnpm i axios -S
	const getTemplate = () => {
		return new Promise((resolve, reject)=>{
			axios.get('http://localhost:8888/public/index.html')//webpack启动本地服务，这里url比较固定，即打包出的文件
				.then(res =>{
						resolve(res.data)
				})
				.catch(reject) // 出现问题
		})
	}
#### 获取根组件打包文件
	const MemoryFs = require('memory-fs')
	const path = require('path')
  const serverConfig = require('../../build/webpack.config.server)
	const mfs = new MemoryFs
	// 获取bundle文件路径,在内存中读文件，路径由打包配置文件拼出
	const bundlePath = path.join(
		serverConfig.output.path,
		serverConfig.output.filename
	)
	const bundle = mfs.readFileSync(bundlePath, 'utf-8') // 通过mfs方式从内存中读取bundle文件
#### 打包文件需要被监听实时更新
	const webpack = require('webpack')
	const serverCompiler = webpack(serverConfig)
	serverCompiler.outputFileSystem = mfs // 使读取文件方式都是从内存中读写，以前都是用fs，从硬盘中
	let serverBundle

	// 启动监听entry下依赖的文件是否有变化，若有就重新启动打包
	serverCompiler.watch({},(err, status)=>{ // status是打包时输出的信息
		if (err) throw err
		status = status.toJson() // ?
		status.errors.forEach(err => console.log(err))
		status.warnings.forEach(warn => console.log(warn))

		const bundlePath = path.join(
			serverConfig.output.path,
			serverConfig.output.filename
		)
		const bundle = mfs.readFileSync(bundlePath, 'utf-8') // string内容，不是可以使用的html模块内容，接下来需要把string内容转为html模块

		const m = new Module()
		m._compile(bundle, 'server-entry.js')//指定文件名
		serverBundle = m.exports.default
	})
#### 打包文件string转为html模块,此方法是个hack方法
	const Module = module.constructor// 创建新Module
	const m = new Module()
	m._compile(bundle)
	serverBundle = m.exports.default

#### final
const ReactDomServer = require('react-dom/server')
module.exports = function(app) { // 被server/server.js引用时，会将app传入，app由express()创建
	// npm i http-proxy-middleware -D // express的中间件，做代理
	// 客户端的js都是在webpack-dev-server里存储，通过http服务export出来，
	// 所以需要将静态文件都通过代理的方式代理到webpack-dev-server启动的服务上面
    const proxy = require('http-proxy-middleware')
	app.use('/public', proxy({ // 静态文件url都要用一个共同的前缀'/public'，方便区分
			target: 'http://localhost:8888'
	}))

	app.get('*', (req, res)=>{
		getTemplate().then(template => {
			const content = ReactDomServer.renderToString(serverBundle)
			res.send(template.replace('<!--app-->', content))
		})
	})
}
### 修改启动方式
	webpack.config.server.js中"scripts"
	"start": "node server/server.js"改为
	"dev:server": "cross-env NODE_ENV=development node server/server.jf"
	启动: npm run dev:client
	启动: npm run dev:server


## 18.P2-9 esLint
1. esLint随ECMAScript更新而更新
2. 配合git, 在git commit时，使用git hook调用eslint进行代码验证，不规范的代码无法提交到git仓库
	npm i hasky -D
	"scripts": {
		"lint": "eslint --ext .js --ext .jsx client/",
		"precommit":"npm run lint" // git commit 提交之前会自动执行检测client目录下的js,jsx文件是否符合eslint，不符合不允许提交
	}
3. .editorconfig, 多编辑器插件，不同编辑器可以共用同一个配置文件，保证不同编辑器的规范一致
root = true
[*]  //针对所有文件
charset=utf-8
indent_style = space
indent_size=2
end_of_line=lf
insert_final_newline=true // 自动在最后加一空行
trim_trailing_whitespace=true //删除行末空格
4. 某行代码不运用eslint约束，在行尾加上单行注释：// eslint-disable-line  
5. npm i eslint -D
.eslintrc//根目录新建，约束全部
	{
		"extends": "standard" // 标准的规则，规则不是太多
	}
.eslintrc // client目录下，约束client代码规范,eslint官网了解
	{
		"parser": "babel-eslint", // 指定工具解析代码，npm i babel-eslint -D
		"env": { // 指明代码可以在哪些环境执行，可使用该环境中一些环境变量
			"browser": true, // 浏览器， 可以使用BOM DOM
			"es6": true,
			"node": true // node， 可以使用node的环境变量
		},
		"parserOptions": { //
			"ecmaVersion": 6, // 使用es6
			"sourceType": "module" // 使用模块方式
		}
		"extends": "airbnb", // react代码规则，规则多
		"rules": {
			"semi": [0] // 写不写分号都可以
		}
	}
6. 在webpack.config.client.js里增加：
module: {
	rules: [
		{
			enforce: 'pre',
			test: /\.(js|jsx)$/,
			loader: 'eslint-loader',
			exclude: [
				path.resolve(__dirname, '../node_modules')
			]
		}
	]
}
7. 安装的包 -D
babel-eslint  eslint-config-airbnb eslint-config-standard eslint-loader
eslint-plugin-import eslint-plugin-jsx-ally eslint-plugin-node
eslint-plugin-promise eslint-plugin-react eslint-plugin-standard


## 19.P2-10性能优化
1. 抽出webpack.config.client.js及webpack.config.server.js中共同的部分建立webpack.base.js
使用工具：npm i webpack-merge -D // webpack中专门用来合并配置项的包
webpackMerge = require('webpack-merge') // 会进行深度拷贝覆盖

2. 服务端加入favicon.icon

npm i serve-favicon -S // express的包，为了加入favicon
server.js
const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, '../favicon.ico)))

3. 实现服务端热更新：nodemon
修改"dev:server": "cross-env NODE_ENV=development node server/server.js",
"dev:server": "nodemon server/server.js"

4. 安装包：npm i nodemon -D //需要写个配置脚本控制服务
touch nodemon.json
{
	"restartable": "rs",
	"ignore": [ // 配置哪些文件变化，服务器可以忽略
		".git",
		"node_modules/**/node_modules",
		".eslintrc",
		"client",
		"build"
	],
	"env": {// 使用nodemon时，环境变量在这里配置，使得第3点配置成立
		"NODE_ENV": "development"
	},
	"verbose": true,// 编译时输出详细信息
	"ext": "js" // 配置哪些类型文件变化了，需要重启服务器

}

//////////////////end react+webpack基础配置

## P3-2路由配置
1. 指定哪些文件被引入时不用写后缀名：
    在webpack.config.base.js里加上
    resolve: {
        extensions: ['.js','.jsx']
    }
2. <Redirect from="" to="">路由重定向,不推荐使用，在Switch中才使用
3. <Switch></Switch> 匹配第一个路由，下面的路由不再寻找
4. <StaticRouter> 服务端渲染用到

## P3-3 store配置
MVC模式，view无法检测到M更新，会使MV脱离
使用Mobx
  ### 删除.babelrc，改用babel.config.js，其实使用.babelrc也可以
	/Users/oral/github/ReactPractices/JNode/client/store/app-state.js: Support for the experimental syntax 'classProperties' isn't currently enabled (4:21):
需要配置babel.config.js
"plugins": [
    ['@babel/plugin-proposal-decorators', {'legacy': true}],
    ['@babel/plugin-proposal-class-properties'],
  ]
安装包：cnpm i @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D
cnpm i mobx-react@5   // 最新版本6+

## P3-4 Cnode接口代理实现
需要安装的包：
body-parser //转化请求的body,转成json, bodyParser.json() ,
    app.use(bodyParser.json()) // 将body json请求格式数据转化为req.body的数据
    app.use(bodyParser.urlencoded({extended:false})) //对应表单请求的不同类型数据也转成到req.body上
express-session //存放服务端的session
    app.use(session({
        maxAge: 10*60*1000, //设置有效时间
        name: 'tid',//session放一个cookie id到浏览器中，这是cookie id名字
        resave: false, //每次请求是否要生成一份新cookie id
        saveUninitialized: false,
        secret: 'react cnode class'// 用配置的字符串加密cookie保证cookie安全，不被解密
    }))
query-string


### todo
1. 代理后有点问题
2. webpack里entry下的vendor？

2. 配置样式
  1. 使用loaders时，不再允许省略'-loader'后缀
	2. cnpm i postcss -D


