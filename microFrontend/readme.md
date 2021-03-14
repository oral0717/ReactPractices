本目录为微前端实战目录：
demo1: 基于qiankun[https://qiankun.umijs.org/zh]的微前端项目



`react-app-rewired` 用于修改react脚手架默认配置

1. 报错 [qiankun] Wrapper element for card-list with instance card-list_1589423446854 is not existed!

原因是子应用配置了这个导致的 https://github.com/dbkillerf6/qiankun-error-demo/blob/09f88806eda5681d34cc1605cd715f37ef2e4f0b/micro/card-list/config/webpack.config.js#L140

webpack 默认的 globalObject 值是 'window'，通常不配就行，如果改成了 'this' 会导致沙箱泄露，从而导致不同实例共用了同一个 chunk 运行时，而前一个运行时因为卸载后 element 被置为 null，下一个实例因为还是在同一运行时里会直接使用前一个闭包中的 element，从而造成了报错

2. 子应用与主应用的html模板中的id取名须不同
