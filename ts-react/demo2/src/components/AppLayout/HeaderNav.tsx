import React from 'react'
import { Menu } from 'antd'
interface Props { }

function HeaderNav(props: Props) {
  const { } = props
  const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
    { label: '菜单项三', key: 'item-3' },
  ];
  return (
    <Menu mode="horizontal" theme="dark" items={items} />
  )
}

export default HeaderNav
