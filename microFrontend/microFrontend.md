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




9. microFrontendDemo3 umi创建项目启用@umijs/plugin-qiankun

需要注意：
- 整体ui安排：各子应用的ui及主应用ui的协调
- 主应用中面包屑导航的显示处理（主应用与子应用间数据交互提现）
- 各应用间登录信息处理及子应用统一获取公共信息及各自登录处理
- 主应用中Footer部分显示，子应用中相应无重复内容显示，如Footer，logo，面包屑导航
- 主应用初次默认打开哪个子应用处理？



- 子应用中不用引入qiankun依赖, 但是需要安装插件 @umijs/plugin-qiankun
- 应用中如果加入config/config.js配置，如果想要生效，需要删除根目录中的 .umirc.ts，后者优先级比较高
- 子应用中需要在src/app.ts入口文件里暴露出子应用生命周期钩子(非必要)
- 生命周期函数：bootstrap mount unmount
- 主应用里注册的子应用的name需要与子应用中package.json中的name保持一致，否则会有warning

10. 主应用向子应用传递数据
- localStorage:
- 通过props传值：
  主应用中config/config.ts配置中注册子应用信息时，props接收主应用传递给子应用的数据
- 配合 useModel 使用（推荐）
  安装@umijs/plugin-model 或 @umijs/preset-react,默认的脚手架内置了 @umijs/preset-react
  需要在 src/app.ts 里导出一个 useQiankunStateForSlave 函数，函数的返回值将作为 props 传递给微应用
- 使用 initGlobalState(state) 全局传值


11. 子应用向主应用传递数据

## 报错
- 已经加载过app1，切到app2, 在切回app1时报错：
devScripts.js:5931 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
子应用已经卸载了，却还操作了state



## 基于umi创建的项目微前端方案
- umi脚手架创建三个子应用 和 一个主应用
  umi创建项目方法:mkdir appxx && cd appxx // 创建应用appxx， app4为初始项目
                yarn create @umijs/umi-app
                yarn
                yarn start
- 主应用main-app中安装 npm包 qiankun 及插件 @umijs/plugin-qiankun
  yarn add qiankun
  yarn add -D @umijs/plugin-qiankun
- 主应用修改配置：
    - 删除根目录.umirc.ts, 创建config/config.ts 进行路由等配置（.umirc.ts优先级较高，所以要删除）
    - 根目录中新建.env文件，进行一些有关环境配置，如默认端口配置PORT=8001

- 主应用中的config.ts里注册子应用及配置子应用对应访问路由
  指定UMI_ENV=test，则默认采用config/config.test.ts
- 子应用修改配置：
  - 删除根目录.umirc.ts, 创建config/config.ts 进行路由等配置（.umirc.ts优先级较高，所以要删除）
  - 根目录中新建.env文件，进行一些有关环境配置，如默认端口配置PORT=8001
  - 在config/config.ts中注入：
    qiankun: {
      slave: {}
    }
- 子应用中只需安装插件 @umijs/plugin-qiankun，不用安装qiankun
- 子应用中创建入口文件src/app.ts，声明好子应用的生命周期函数：bootstrap mount unmount
- 主应用与子应用间数据交流
  - 通过props传值：
    主应用中config/config.ts配置中注册子应用信息时，props接收主应用传递给子应用的数据
    子应用中的生命周期函数就能接收到

  - 配合 useModel 使用（推荐）
    安装@umijs/plugin-model 或 @umijs/preset-react,默认的脚手架内置了 @umijs/preset-react
    ```js
    // 主应用中需要在 src/app.ts 里导出一个 useQiankunStateForSlave 函数，函数的返回值将作为 props 传递给微应用
    export function useQiankunStateForSlave() {
      const [globalState, setGlobalState] = useState({ dataName: 'useQiankunStateForSlave' })
      const [ableState, setAbleState] = useState({ dataAge: 18 })
      // 实际给子应用调用修改 state 的方法
      // 传参和实现可以自定义, 子应用直接调用 setGlobalState 是不生效的, 所以才需要这个额外的方法, 这是一个坑
      // const setGlobalStateHandle = (dataName: any) => { setGlobalState({ dataName }) }
      // const setAbleStateHandle = (dataAge: any) => { setAbleState({ dataAge }) }
      return {
        globalState,
        setGlobalState,
        ableState,
        setAbleState
        // setGlobalStateHandle,
        // setAbleStateHandle
      };
    }
    // 子应用中的生命周期函数中的props可以读到传过来的数据，在mount函数中
    const dataName = masterProps.globalState.dataName
    console.log(dataName)
    masterProps.onGlobalStateChange((state: any, prev: any) =>
      {
        console.log(state, prev);
      });
    useEffect(() => { masterProps.setState('bbb') }, [])
    console.log('masterProps',masterProps)
    // 子应用中的生命周期函数的props可以读到，页面中通过
    import { useModel } from 'umi';
    function MyPage() {
      const mainAppProps = useModel('@@qiankunStateFromMaster');
      console.log('mainAppProps', mainAppProps)
      return <div>App1中page1{JSON.stringify(mainAppProps)}</div>;
    }
    export default MyPage
    ```

  - qiankun 官方提供的通信方式 - Actions 通信，使用 initGlobalState(state) 全局传值
    定义全局状态, 并返回通信方法, 建议在主应用使用, 微应用通过 props 获取通信方法
      ```js
      //- 主应用：
      import { initGlobalState, MicroAppStateActions } from 'qiankun';
      // 初始化 state
      const actions: MicroAppStateActions = initGlobalState(state);
      actions.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log(state, prev);
      });
      actions.setGlobalState(state);
      actions.offGlobalStateChange();
      //- 子应用：
      // 从生命周期 mount 中获取通信方法, 使用方式和 master 一致
      export function mount(props) {
        props.onGlobalStateChange((state, prev) => {
          // state: 变更后的状态; prev 变更前的状态
          console.log(state, prev);
        });
        props.setGlobalState(state);
      }
      ```
      - 优点: 可传递 store 到各子应用
      - 缺点: 子应用在 App.ts 中才比较好使用 props.onChangeGlobalState 之类语法

- localstorage使用是否有问题
- jquery网站内嵌
- 部署以后的项目name影响
- 子应用与子应用间数据传递
- 各应用间样式隔离
- 路由注册子应用，是否要约束路由模式一致，是否可以接受history 与 hash 并用





