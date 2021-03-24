
import { defineConfig } from 'umi'; // 如果你想在写配置时也有提示，可以通过 umi 的 defineConfig 方法定义配置
import routes from './routes';
console.log('test')
export default defineConfig({
  routes,
  qiankun: {
    master: {
      apps: [ // 注册子应用信息
        {
          name: 'app1', // 子应用唯一 id
          entry: '//localhost:1801', // 子应用html 地址
          credentials: false, // 拉取 entry 时是否需要携带cookie
          props: {} // 主应用传递给子应用的数据
        },
        {
          name: 'app2',
          entry: '//localhost:1802',
        },
        {
          name: 'app3',
          entry: '//localhost:1803',
        },
      ],
      routes: [ // 子应用运行时需要注册的微应用路由
        {
          path: '/app1', // 路由 path
          microApp: 'app1', // 关联的微应用名称
          microAppProps: {} // 微应用配置
        },
        {
          path: '/app2',
          microApp: 'app2',
          microAppProps: {}
        },
        {
          path: '/app3',
          microApp: 'app3', 
          microAppProps: {}
        }
      ]
    },
  },
});

