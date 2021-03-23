*** 微前端 ***
1. 什么是微前端
- 一种借鉴于微服务的前端架构思想，可以在一个主应用容器里调用多个子应用。在用户看来仍然是内聚的单个产品，而对应用来说其实是多个能够独立开发、测试、部署的小块。

2. 微前端特点
- 主应用与子应用可以采用不同框架技术栈进行独立开发、测试、部署发布，他们各司其职，主应用主要解决一些横切关注点，如身份验证和导航，控制微前端的渲染区域和时机
- 有利于各应用复用公共资源，代码库更小，可维护性更高
- 渐进地升级、更新甚至重写部分前端功能成为了可能

3. 微前端注意点
- 不建议跨子应用复用业务组件，因为会造成高度耦合，增加变更成本
- 对于公共组件，需要制定规范，严格规范执行，减少不必要的组件代码冗余
- 需要考虑好样式、作用域的隔离，避免应用间的污染
- 需要考虑好主应用向子应用间的数据通信，要尽可能减少子应用间的通信，以避免大量弱依赖造成的强耦合

4. 微前端有利于做什么？
- 用来分解一个大型项目的复杂度：对于一个大型项目，一些相对独立的业务模块可以分离出来作为一个子应用
- 根据团队技术栈掌握情况，可以尝试不同技术栈
- 各自负责不用子应用的团队有一定的团队组织上的自治权
- 为升级老项目提供渐进式路线，度过升级重构过渡期

5. 缺点：
- 导致依赖项（dependencies）冗余，增加用户的流量负担
- 团队自治程度的增加，可能会破坏协作

6. 微前端解决方案： qiankun[https://qiankun.umijs.org/zh]

7. 踩坑记录：（基于qiankun搭建的实践项目）
- 报错[qiankun] Wrapper element for ... with instance ... is not existed!
  - 解决方法：修改webpack配置中的 output.globalObject = ‘window’
  - 原因：如果globalObject改成了 'this' 会导致沙箱泄露，从而导致不同实例共用了同一个 chunk 运行时，而前一个运行时因为卸载后 element 被置为 null，下一个实例因为还是在同一运行时里会直接使用前一个闭包中的 element，从而造成了报错
- 子应用与主应用的html模板中的容器div的id取名须不同，但各子应用中的容器id可以相同
- 子应用中需要添加src/public-path.js文件，在入口文件src/index.js中引入该文件，子应用中入口处定义    __webpack_public_path__，运行时动态获取，防止资源加载出错
  - public-path.js内容：
    ```js
    if (window.__POWERED_BY_QIANKUN__) {
        //  编译时环境中没有 __webpack_public_path__，所以会报未定义
        // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    }
    ```

8. microFrontendDemo为基于qiankun构建的微前端demo
- 目录为:
  - 主应用main-app
  - 子应用react-micro-app1
  - 子应用react-micro-app2
  - 子应用react-micro-app3
- 访问方法：
  - 先启动各子应用：
  cd react-micro-app1, yarn start,  http://localhost:8081/ (可单独访问)
  cd react-micro-app2, yarn start,  http://localhost:8082/ (可单独访问)
  cd react-micro-app3, yarn start,  http://localhost:8083/ (可单独访问)
  - 然后启动主应用
  cd main-app, yarn start, http://localhost:8080/
  - 访问主应用 http://localhost:8080/，点击主应用中导航，即可在当前页面访问对应子应用，注意查看路由变化。
- 主要功能：
  - 在主应用首页中点击导航，访问子应用
  - 各子应用中暴露多生命周期可供调用:
    - bootstrap
    - mount
    - unmount

思考：
1. 数据流转
2. 共享功能
3. 应用级缓存处理


9. microFrontendDemo3 umi创建项目启用@umijs/plugin-qiankun