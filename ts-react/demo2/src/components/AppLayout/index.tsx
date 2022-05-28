import { Layout } from 'antd'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderNav from './HeaderNav';
import SideNav from './SideNav';
const { Header, Footer, Sider, Content } = Layout;

interface Props { }

const AppLayout: FC = (props: Props) => {
  const { } = props

  return (
    <Layout>
      <Header><HeaderNav /></Header>
      <Layout>
        <Sider><SideNav /></Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout >
  )
}

export default AppLayout
