import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path?: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    path,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('用户管理', 'sub1', '/user', <MailOutlined />, [
    getItem('用户1', 'g1', '/user/1-1', null, [getItem('用户1-1', '1', '/user/1-1/1-1-1'), getItem('用户1-2', '2', '/user/1-1/1-1-2')], 'group'),
    getItem('用户2', 'g2', '/user/1-2', null, [getItem('用户2-1', '3', '1-2-1'), getItem('用户2-2', '4', '1-2-2')], 'group'),
  ]),

  getItem('Navigation Two', 'sub2', 'two', <AppstoreOutlined />, [
    getItem('Option 5', '5', '2-1'),
    getItem('Option 6', '6', '2-2'),
    getItem('Submenu', 'sub3', '2-3', null, [getItem('Option 7', '7', '2-3-1'), getItem('Option 8', '8', '2-3-2')]),
  ]),

  getItem('Navigation Three', 'sub4', 'three', <SettingOutlined />, [
    getItem('Option 9', '9', '3-1'),
    getItem('Option 10', '10', '3-2'),
    getItem('Option 11', '11', '3-3'),
    getItem('Option 12', '12', '3-4'),
  ]),
];

const SideNav: React.FC = () => {
  const [current, setCurrent] = useState('sub1')
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    // navigate(e.item.props.path)
    setCurrent(e.key)
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={[current]}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key="sub1" title="用户管理">
        <Menu.Item key="1">
          <Link to="/user">用户</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/user/2">用户2</Link>
        </Menu.Item>
        <Menu.Item key="3">用户3</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideNav;