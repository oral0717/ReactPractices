import { Layout } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { Outlet, useLocation, matchRoutes } from 'react-router-dom'
import router from '../../router'
import HeaderNav from './HeaderNav';
import SideNav from './SideNav';
const { Header, Footer, Sider, Content } = Layout;

const AppLayout: FC = () => {
  const { pathname } = useLocation()
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([])
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([])
  const [isInitApp, setIsInitApp] = useState<boolean>(false)

  useEffect(() => {
    const routes = matchRoutes(router, pathname)
    const pathArr: string[] = []
    if (routes) {
      for (let match of routes) {
        let path = match.pathname
        if (path) {
          pathArr.push(path)
        }
      }
    }
    setDefaultSelectedKeys(pathArr)
    setDefaultOpenKeys(pathArr)
    setIsInitApp(true)
  }, [pathname])

  if (!isInitApp) {
    return null
  }
  return (
    <Layout>
      <Header><HeaderNav /></Header>
      <Layout>
        <Sider>
          <SideNav
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
          />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout >
  )
}

export default AppLayout
