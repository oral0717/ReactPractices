import React from 'react'
import { Link } from "react-router-dom";
import { TimePicker } from 'antd'

const UserManagement = () => {
  return (
    <div>
      UserManagement<TimePicker />
      <ul>
          <li>
            <Link to="/">UserIntro</Link>
          </li>
          <li>UserManagement</li>
          <li>
            <Link to="/BdPageA">BdPageA</Link>
          </li>
          <li>
            <Link to="/BdPageB">BdPageB</Link>
          </li>
      </ul>
    </div>
  )
}

export default UserManagement