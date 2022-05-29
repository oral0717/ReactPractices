import { RouteObject } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import User from '../pages/User'
import UserDetail from '../pages/UserDetail'
const router: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'user',
        element: <User />
      },
      {
        path: 'user/:userId',
        element: <UserDetail />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]
export default router