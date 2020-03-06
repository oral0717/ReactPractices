P1-1目录
基础内容
环境搭建
基础语法
原理进阶
动画

Redux
Redux进阶

实战项目
环境搭建
Header
首页
详情页

登录校验
上线

creat-react-app
组件化思维
JSX
开发调试工具
虚拟DOM
生命周期

React-transition-group
Redux
Antd
UI,容器组件
无状态组件
redux-thunk
redux-saga
Styled-components //样式布局，实现样式编码，避免组件间样式干扰
Immutable.js // 数据框架
redux-immutable
axios

P2-1React简介
ReactJS ReactNative ReactVR
ReactFiber 即React16，React底层在事件循环中加入了优先级等概念，可以利用事件循环的碎片时间中，执行一些高优先级的用户交互，提高用户体验
React                           vs  Vue
更灵活，处理复杂项目，选择性方案更多      更多API，实现功能更简单，正因为API多，灵活性受限制
复杂度高项目使用                       面向用户端复杂度不是特别高的项目适用

P2-2react开发环境准备
  script引入.js文件来使用react(古老)

  通过脚手架工具来编码：webpack gulp grunt

  create-react-app //官方推荐脚手架工具,用于初级学习
  用法：
  npm i -g creat-react-app // 全局安装脚手架create-react-app
  create-react-app todolist // 创建并生成项目todolist
  npm run start // 启动或者 yarn start
  todolist项目目录：manifest.json ,用户在手机上生成app图标的配置
                serviceWorker.js ,PWA，用户第一次访问网页需要联网，下次断网时，用户可以离线访问本app
                App.test.js ,自动化测试文件
  备注：1.分支 feature-todolist-fixConfig,项目todolist执行了eject操作
      2.用create-react-app创建的项目，import src以外的文件会失效，添加的特殊限制。它的实现是ModuleScopePlugin为了确保文件驻留在src/。
      解除限制：从webpack配置文件执行eject和删除ModuleScopePlugin。

P3-1
  1.import React, { Component, Fragment } from 'react'
  // Fragment是个标签占位符，可以用来包裹元素却在html中不会显示

  2.onChange={this.handleChange.bind(this)}
  // JSX里元素绑定事件，一定要绑定this,绑定作用域

P3-4 JSX语法补充
  1.dangerouslySetInnerHTML={{__html:item}} 插入html文本，html语法不转义
  2.<label htmlFor='name' className='label'></label>, for要替换成htmlFor,class要替换成className
  3.JSX注释形式 {/*xxxxxx*/}或
  {
    //xxxxxx
  }

P3-5拆分组件与组件之间的传值
  1.
  constructor(props){
    super(props) //this.props
    this.handleDel = this.handleDel.bind(this) //性能更好，最好不要把绑定this的放在组件上，原因？
  }
  2.子组件调用父组件的某个方法，一定要注意方法的this绑定

P3-6优化
  1.this.setState((prevState)=>{ // setState参数为一个函数，使之异步化，提升效率
      const { inputValue, list } = prevState
      return {
        list: [...list, inputValue]
      }
    })

P3-7
  jq命令式开发，操作dom
  react声明式开发
    与其他框架并存
    组件化
    单项数据流，父组件向子组件传值，子组件不能直接改变父组件传过来的值
    视图层框架，不方便与非父子组件传值，这是需要数据层框架redux,flux
    函数式编程，方便自动化测试
## P4-1
  React developer tools
## P4-2
  import PropTypes from 'prop-types'   //对变量类型做属性校验
  写法一：
```
  TodoItem.propTypes = {
    item: PropTypes.string,
    index: PropTypes.number,
    onHandleDel: PropTypes.func,
    test: PropTypes.string
  }
  TodoItem.defaultProps = {
    test: 'xx'
  }
```
  写法二：
  在组件内部声明：
```
  static propTypes = {
    item: PropTypes.string,
    test: PropTypes.string // 同样会约束defaultProps
  }
  static defaultProps = {
    test: 'xx'
  }
  PropTypes.arrayOf()
  PropTypes.oneOfType([])
```

## P4-4
  虚拟DOM,本质上是JS对象，用js的方式描述DOM
  节省性能：js对象对比 比真实DOM对比 比较省性能，减少了对真实DOM的创建及对比
  JSX是模板，不是真实DOM，React.creatElement()使模板变成JS对象（虚拟DOM），再变成真实DOM

  虚拟DOM优点：
  1.性能提升
  2.使跨端应用得以实现，React Native, 虚拟DOM可以在原生应用里识别生成原生组件，不用生成DOM

## P4-6 Diff算法
1.setState异步函数执行，短时间多次setState,合并成一次setState，减少比对次数
2.虚拟DOM逐层比对
3.key保持稳定，提高虚拟DOM对比性能

## P4-7  Ref
  1.对dom的引用
  React16, ref={(input)=>{this.input=input}}
  少用ref，容易因为获取不到想要的dom而造成bug。react是数据驱动，尽量不操作dom
  setState(()=>{},()=>{})
## P4-9 生命周期函数
  组件都是继承自React.Component(),其里面都默认内置了其他生命周期函数，唯独没有内置render,因此新组建一定要有render函数，别的生命周期都可以没有
  shouldComponentUpdate(nextProps, nextState),项目优化
  componentWillReceiveProps(nextProps)
## P4-10
1.ajax请求放在 `componentDidMount()`
2.发送ajax请求，使用axios包
```
  import axios from 'axios'
  componentDidMount(){
    axios.get('/api/todolist')
      .then(()=>{alert('succ')})
      .catch(()=>{alert('error')})
  }
```
  ##### Charles代理接口
  1.用charles抓取请求的时候，charles总是抓不到localhost:3000发出的请求，也就没办法模拟数据，
  后来看官网说什么要在charles模拟本地数据的时候域名用localhost.charlesproxy.com。
  然而很不幸的是，我本地http://localhost.charlesproxy.com:3000本启动不起来项目，所以只能修改react项目的默认域名，
  在react项目的package.json文件中将原来的"start": “react-scripts start”, 这一句改为
  "set PORT=3000 HOST=localhost.charlesproxy.com && react-scripts start"，
  项目的本地启动地址就变成了了http://localhost.charlesproxy.com:3000。此时再用charles模拟数据就成功了。


## P4-11 React动画
1.transition  vs animation
2.[react-transition-group](https://reactcommunity.org/react-transition-group/css-transition) // 第三方动画模块



## P5-1Redux
把所有的数据放入store中管理，一个组件改变了store中的数据，
其他组件感知到store数据中的变化后，取到新数据并更新
使用redux-devtool配置：
```
const store = createStore(
  reducer,
  新增window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```

## P6-4使用Redux-thunk中间件
  1.把异步请求或复杂逻辑放到action中处理
    使用方法：`yarn add redux-thunk  /  npm install redux-thunk`
    在store/index.js配置好使用thunk，使用thunk时，使action不只是个对象，可以是个函数了，函数参数含有dispatch
    异步请求放在`actionCreators.js`中，不再放在组件生命周期函数中

## P6-5什么是中间件，是action与store之间，即redux的中间件
  redux中间件是action与store之间，对dispatch()方法的封装和升级,之前dispatch只能接受一个对象，用中间件可是接受函数
  使用中间件后，如果dispatch接受到的参数是对象，则dispatch会将对象直接传给store
  如果dispatch接受到的是函数，中间件会先执行这个函数，执行完以后，需要调用store时再调用store

  `redux-logger`,派发action时，把action打印在控制台里
  `redux-thunk`,把异步操作放入action里操作，异步代码拆分管理
  `redux-saga`,单独把异步逻辑拆分出来放到一个文件里管理，异步代码拆分管理

## P6-6 redux-saga入门
  ##### yarn add redux-saga
  ##### 修改store/index.js
    import { createStore, applyMiddleware, compose } from 'redux'
    import createSagaMiddleware from 'redux-saga'
    import reducer from './reducer.js'
    import todoSaga from './sagas'

    const sagaMiddleware = createSagaMiddleware()
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :  //启用redux-devtools
      compose;
    const enhancer = composeEnhancers(
      applyMiddleware(sagaMiddleware)
    );
    const store = createStore(reducer, enhancer)

    sagaMiddleware.run(todoSaga)  // 运行saga
    export default store
  ##### 新增store/saga.js   //里面的内容只能是generater函数, 写入异步函数
    function* todoSaga() {}
    export default todoSaga;

  ##### redux-saga vs redux-thunk特征：
    redux-saga有很多API, redux-thunk的api少，比saga容易，只是使action返回的不仅是个对象，还可以是个函数
    redux-saga可以把异步处理或复杂逻辑完全拆出来放入一个文件里单独管理，处理非常大型项目优于redux-thunk

## P6-8 react-redux的使用
  安装：`yarn add react-redux`
  使用：
  ```
  import { Provider } from 'react-redux'

  ReactDOM.render(
    <Provider store={store}> // Provider使得所有组件可以连接到store
      <TodoList />
    </Provider>,
    document.getElementById('root')
  );
  ```

  #### 子组件获取store的内容：
    1.没有react-redux时，是通过`const store = store.getState()`
    2.用了react-redux,通过`connect()`方法获取
  ```
  import {connect} from 'react-redux'

  const mapStateToProps = (state) => {//state即store里的数据,props即本组件可以用的数据
    return {
      inputValue: state.inputValue,
      list: state.list
    }
  }
  mapDispatchToProps = (dispatch) => {
    return{
      changeInputValue(e){
        dispatch(changeInputValue(e.target.value))
      }
    }
  }

  // 经过connect连接的组件导出的内容一定是个容器组件
  export default connect( // 让App和store做链接,按照规则mapStateToProps，
    mapStateToProps,
    mapDispatchToProps
  )(App)
  ```


## ant-design
1.[github上寻找issue解决问题](https://ant.design/docs/react/introduce-cn)

2.List.Item加入onClick
`<List.Item onClick={()=>(this.handleDelClick(index))}></List.Item>`

## 注意
1.项目目录规则，src有什么特殊性: `create-react-app`脚手架限制了目录src,不允许src里文件访问src外文件
只有src根目录下的文件会被webpack编译，所以必须把文件放在src根目录下，否则不会识别。

# 总结：
1.性能提升：
  1.在constructor中绑定好方法的this,constructor方法只执行一次
  2.setState传入函数，异步方式修改state，可以合并多次setState
  3.`shouldComponentUpdate`,排除不需要重新渲染的时机
  4.要使用稳定的值做key

## 组件种类
1.容器组件
2.ui组件
  基本没有逻辑功能部分，只有render渲染部分
3.无状态组件：
  只有render函数的普通组件可以转为无状态组件
  性能比普通组件好，因为无状态组件它只是个函数，普通组件需要执行各种生命周期函数

## P7-1
  #### 样式处理
  1.import '.index.css'// 在组件中直接引入css文件，会使项目所有组件都生效，引起样式冲突，因此需要使用第三方包styled-components
  2.yarn add styled-components // 使组件的样式只对本组件生效,（自认为不好用）
    样式文件要改成.js
    import { injectGlobal} from 'styled-components'
    injectGlobal`里面放入全局样式`;//如里面放入全局reset.css的内容






## JSX的坑
  1.注释
  2.class=>className, for => htmlFor
  3.dangerouslySetInnerHTML={{__html: xx}}, 插入html
## Simple React Snippets
  imrc  // import React, { Component } from 'react'
  cc // 类初始代码
  很多简写可以查看插件文档
## 生命周期优化代码渲染
  shouldComponentUpdate(nextProps, nextState){}
## React-Router
  1.安装，yarn add react-router-dom
  2.动态传值：（如列表详情页url上加id）<Route path="/list/:id" component={List}></Route>
    设置规则
    传递值
    接受值
    显示内容
  3.路由重定向，重定向后不能返回
    1.如何利用标签跳转，
    import {Redirector} from 'react-router-dom'
    <Redirector to=''/>
    2.编程，利用history来改变
    constructor(props){
      super(props)
      this.props.history.push('/home/')
    }
  4.嵌套路由
## React Hooks
  1.useState()不能用于条件语句中
  2.useEffect()代替生命周期函数 componentDidMount(),componentDidUpdate()
  3.在componentWillUnmount()销毁计时器
    useEffect(()=>{}, [])// 第二个参数时空数组时，只有当所在组件销毁时，第一个参数才执行，第二个参数里传入参数时，参数改变时，第一个参数函数执行
    销毁计时器// 通过路由改变达到组件销毁效果
    react-router-dom,
  4.useContext() 用于父子传值问题
    import React, {createContext, useContext} from 'react'
  5.useReducer()
  6.useMemo(),  vs shouldComponentUpdate()
  7.useRef()
  8.自定义Hooks

## 打包和上线
  1.绝对路径一定为相对路径
  2.npm run build,打包


###### todo
1.哪些包需要在生产环境中安装的
  react react-dom axios react-router-dom
2.redux-thunk, redux-saga工作流程？中间件是什么
3.react-router v3与v4区别
4.
import {BrowserRouter, Route, Link} from 'react-router-dom'// v5
import {Router} from 'react-router'// v2
5.数组解构
const [count, setCount] = useState(0)
let _useState = useState(0)
let count = _useState[0]
let setCount = _useState[1]


