
export default [
  {
    exact: true,
    path: '/',
    component: '@/pages/index'
  },
  {
    exact: true,
    path: '/login',
    component: '@/pages/login'
  },
  {
    exact: true,
    path: '/user',
    component: '@/pages/user'
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
