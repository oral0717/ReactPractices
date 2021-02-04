import React from 'react'
import { Link } from "react-router-dom";
import { DatePicker } from 'antd'

const UserIntro = () => {
  return (
    <div>
      UserIntro <DatePicker />
      <ul>
          <li>UserIntro</li>
          <li>
            <Link to="/UserManagement">UserManagement</Link>
          </li>
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

export default UserIntro