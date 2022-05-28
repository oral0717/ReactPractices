import { ReactNode } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import About1 from '../pages/About1'
import About2 from '../pages/About2'
import User from '../pages/User'
import UserDetail from '../pages/UserDetail'
import {
  // AppstoreOutlined,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  // MailOutlined,
} from '@ant-design/icons';

interface IRouter {
  id: string;
  path: string;
  title: string;
  exact?: boolean;
  icon?: ReactNode
  component?: ReactNode
  children?: IRouter[]
}

export const routers: IRouter[] = [
  {
    id: '1',
    path: '/',
    title: '首页',
    exact: true,
    icon: <PieChartOutlined />,
    component: <Home />
  }
  , {
    id: '2',
    path: '/about',
    title: 'about页',
    exact: true,
    component: <About />,
    icon: <DesktopOutlined />,
    // component: <About />,
    children: [
      {
        id: '2-1',
        path: '/about/about1',
        title: '用户详情页',
        component: <About1 />,
        children: []
      }
      , {
        id: '2-2',
        path: '/about/about2',
        title: '用户详情页2-2',
        component: <About2 />,
        children: []
      }
    ]
  }
  , {
    id: '3',
    path: '/user',
    title: '用户页',
    exact: true,
    component: <User />,
    icon: <ContainerOutlined />,
    // component: <User />,
    children: [
      {
        id: '3-1',
        path: 'userdetail',
        title: '用户详情页',
        component: <UserDetail />,
        children: []
      }
    ]
  }
]