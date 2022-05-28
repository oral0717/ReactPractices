// import React from 'react';
// import logo from './logo.svg';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import './App.css';
// import { routers } from './routers'

// function App() {
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <Link to="/">点击跳转至home</Link>
//         <hr />
//         <Link to="/user">点击跳转至user</Link>
//         <hr />
//         <Link to="/about">点击跳转至about</Link>
//         <Routes>
//           {routers.map((router: any) => (
//             <Route path={router.path} key={router.id} element={router.component} />
//           ))}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
import React, { Fragment, useState, ReactNode, Key, FC } from 'react';
import './App.css'
import { Menu, Button } from 'antd';
import {
  // AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  // MailOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import { routers } from './routers'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  path?: string,
  children?: MenuItem[],
  // type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    path
    // type,
  } as MenuItem;
}

function getItems(arr: any): MenuItem[] {
  const menuArr = arr.map((route: any) => {
    const { title, id, icon, path, children } = route;
    if (children?.length) {
      return getItem(title, id, icon, path, getItems(children))
    } else {
      return getItem(title, id, icon, path)
    }
  })
  return menuArr
}
// 平铺路由对象
// const flatRouteArr: MenuItem[] = [];
// function getRoutes(arr: any): void {
//   arr.forEach((route: any) => {
//     if (route.children?.length) {
//       getRoutes(route.children)
//     } else {
//       flatRouteArr.push(route)
//     }
//   })
// }
// 渲染子路由
function chilidrenRoute(router: any) {
  if (!router.children) {
    return null
  }
  return router.children.map((value: any) => {
    return (
      <Route path={value.path} element={value.compontent} key={value.id}>
        {chilidrenRoute(value)}
      </Route>
    )
  })
}


const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()

  function handleClick(e: any) {
    const { path } = e.item.props
    console.log(e)
    navigate(path)
  }
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items = getItems(routers)
  // getRoutes(routers)
  return (
    <>
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['3']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleClick}
        />
      </div>
      <div>
        <Routes>
          {routers.map((router: any) => {
            return (
              <Route path={router.path} key={router.id} element={router.component}>
                {chilidrenRoute(router)}
              </Route>
            )
          })}
        </Routes>
      </div>
    </>
  );
};

export default App;
