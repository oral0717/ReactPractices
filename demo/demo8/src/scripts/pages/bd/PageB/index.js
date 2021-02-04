import React from 'react'
import { Link } from "react-router-dom";

const PageB = () => {
  return (
    <div>
      Page B
      <ul>
          <li>
            <Link to="/">UserIntro</Link>
          </li>
          <li>
            <Link to="/UserManagement">UserManagement</Link>
          </li>
          <li>
            <Link to="/BdPageA">BdPageA</Link>
          </li>
          <li>BdPageB</li>
      </ul>
    </div>
  )
}

export default PageB