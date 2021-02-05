import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'antd'

const PageA = () => {
  const [count, setCount] = useState(1)

  return (
    <div>
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
      <p>Page A</p>
      <p>累加器：{count}<Button type="primary"> + </Button></p>
    </div>
  )
}

export default PageA