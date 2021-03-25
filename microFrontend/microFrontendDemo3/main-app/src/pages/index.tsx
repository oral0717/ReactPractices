import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import './index.less';

export default function IndexPage(props: Object) {
  console.log('index', props)
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" >微前端</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">app 1</Menu.Item>
          <Menu.Item key="3">app 2</Menu.Item>
          <Menu.Item key="4">app 3</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">
          主应用Content
          {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>主应用Footer</Footer>
    </Layout>
  );
}
