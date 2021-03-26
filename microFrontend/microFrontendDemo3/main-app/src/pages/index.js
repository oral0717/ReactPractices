import { Layout } from 'antd';
import MainMenu from '@/components/MainMenu'
import './index.less';

const { Header, Content, Footer } = Layout;

export default function IndexPage(props) {
  console.log('index', props)
  const {children, location} = props

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" >微前端</div>
        <MainMenu location={location} />
      </Header>
      <Content>
        <div className="site-layout-content">
          {
            location.pathname === '/' ? '欢迎访问主应用' : children
          }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>主应用Footer</Footer>
    </Layout>
  );
}
