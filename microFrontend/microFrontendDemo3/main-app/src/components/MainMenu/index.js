import { Menu } from 'antd';
import { MENUS } from '@/consts/home'
import { useState } from 'react';
import { history } from 'umi';

function getMenuId(str) {
  const item = MENUS.find(i => i.path === str)
  return item.id
}

export default function MainMenu(props) {
  const { pathname } = props.location
  const [curMenuKey, setCurMenuKey] = useState(getMenuId(pathname))

  function getId(key) {
    const item = MENUS.find(i => i.id === key)
    history.push(item.path)
    setCurMenuKey(key)
  }

  return (
    <Menu theme="dark" mode="horizontal"
      defaultSelectedKeys={[curMenuKey]}
      onClick={({ key }) => getId(key)}
    >
      {
        MENUS.map((i) => (
          <Menu.Item key={i.id}>{i.name}</Menu.Item>
        ))
      }
    </Menu>
  )
}


