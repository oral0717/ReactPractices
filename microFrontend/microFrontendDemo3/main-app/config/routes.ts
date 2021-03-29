
export default [
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      {
        exact: true,
        path: '/main/user',
        component: '@/pages/user',
        title: '用户管理'
      }
    ]
  },
  {
    exact: true,
    path: '/login',
    component: '@/pages/login'
  },
  {
    path: '/app1',
    microApp: 'app1'
  },
  {
    path: '/app2',
    microApp: 'app2'
  },
  {
    path: '/app3',
    microApp: 'app3'
  },
];
