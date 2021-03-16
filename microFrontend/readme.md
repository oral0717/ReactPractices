本目录为微前端实战目录：
demo1: 基于qiankun[https://qiankun.umijs.org/zh]的微前端项目



`react-app-rewired` 用于修改react脚手架默认配置

1. 报错 [qiankun] Wrapper element for card-list with instance card-list_1589423446854 is not existed!
错误解读[https://github.com/umijs/qiankun/issues/574]
原因是子应用配置了这个导致的 https://github.com/dbkillerf6/qiankun-error-demo/blob/09f88806eda5681d34cc1605cd715f37ef2e4f0b/micro/card-list/config/webpack.config.js#L140

webpack 默认的 globalObject 值是 'window'，通常不配就行，如果改成了 'this' 会导致沙箱泄露，从而导致不同实例共用了同一个 chunk 运行时，而前一个运行时因为卸载后 element 被置为 null，下一个实例因为还是在同一运行时里会直接使用前一个闭包中的 element，从而造成了报错

2. 子应用与主应用的html模板中的id取名须不同, 切换子应用时 浏览器title变化？
  - 主应用与子应用的html模板id一样，报错
  - 主应用与某个子应用的html模板id一样，子应用的html模板id互相不一样，报错
  - 子应用的html模板id一样，主应用的html模板id与子应用的不同，不报错

3. 子应用src/public-path.js,在入口文件src/index.js中引入配置文件（注意：一定要在最上面引入）
```js
if (window.__POWERED_BY_QIANKUN__) {
  // 入口处定义__webpack_public_path__，运行时动态获取，防止资源加载出错,编译时，环境中没有 __webpack_public_path__，所以会报未定义
  // 编译时用的是 output.publicPath 默认 ''
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```

4. 在配置好了入口文件 index.js 后，我们还需要配置 webpack，使 main.js 导出的生命周期钩子函数可以被 qiankun 识别获取。
```js
const {name} = require('./package')
  output: {
    // 子应用的包名，这里与主应用中注册的子应用名称一致
    library: `${name}-[name]`,
    // 将你的 library 暴露为所有的模块定义下都可运行的方式
    libraryTarget: "umd",
    // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
    jsonpFunction: `webpackJsonp_${name}`,
  },
```
5. 多应用部署管理,是否只需要一个路由即可？对于项目存放路径有无约束

6. plugin umi-qiankun是否只能用于umi创建的项目中

7. 主应用能做多少工作？
  整体UI
  导航
  如登录态，子应用如何获取？localstorage?

8. warn: Custom rendering function is deprecated, you can use the container element setting instead!


6. 微前端解决方案： qiankun[https://qiankun.umijs.org/zh]
