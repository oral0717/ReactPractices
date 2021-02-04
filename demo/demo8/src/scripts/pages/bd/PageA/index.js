import React from 'react'
import { Link } from "react-router-dom";

const PageA = () => {
  return (
    <div>
      Page A11
      <ul>
          <li>
            <Link to="/">UserIntro</Link>
          </li>
          <li>
            <Link to="/UserManagement">UserManagement</Link>
          </li>
          <li>BdPageA</li>
          <li>
            <Link to="/BdPageB">BdPageB</Link>
          </li>
      </ul>
    </div>
  )
}

export default PageA