import React from 'react'
import { Link } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

interface Props { }

function User(props: Props) {
  const { } = props

  return (
    <div>
      user
      {/* <Outlet /> */}
      <ul>
        <li><Link to="/user/1">用户1</Link></li>
        <li><Link to="/user/2">用户2</Link></li>
        <li><Link to="/user/3">用户3</Link></li>
        <li><Link to="/user/4">用户4</Link></li>
      </ul>
    </div>
  )
}

export default User
