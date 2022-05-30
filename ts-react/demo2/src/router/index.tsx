import { Spin } from 'antd'
import { lazy, Suspense, ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const User = lazy(() => import('../pages/User'))
const UserDetail = lazy(() => import('../pages/UserDetail'))
const lazyLoad = (children: ReactNode): ReactNode => {
  return (
    <Suspense fallback={<Spin />}>
      {children}
    </Suspense>
  )
}
const router: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: lazyLoad(<Home />)
      },
      {
        path: 'user',
        element: lazyLoad(<User />)
      },
      {
        path: 'user/:userId',
        element: lazyLoad(<UserDetail />)
      }
    ]
  },
  {
    path: '/login',
    element: lazyLoad(<Login />)
  }
]
export default router