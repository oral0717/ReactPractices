import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'antd'

function PageA (props) {
  const [count, setCount] = useState(1)
  const [user, setUser] = useState({
    name: 'zz',
    age: 18
  })

  const handleClick = ({name}) => {
    // console.log(111, this, setCount)
    if (name === 'count') {
      setCount(count + 1)
      console.log(count, name)
    }
    if (name === 'update') {
      const newAge = user.age + 2
      setUser({
        ...user,
        name: 'jj',
        age: newAge
      })
      console.log(user, name)
    }
  }
  // React 会在每次渲染后调用副作用函数,包括第一次渲染的时候
  useEffect(() => {
    console.log('useEffect componentDidMount componentDidUpdate', count, props)
    return () => {
      console.log('componentWillUnmount')
    }
  }, [count])

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
      <p>
        累加器：{count}
        <Button type="primary" onClick={() => handleClick({name: 'count'})}> + </Button>
      </p>
      <p>
        设置用户：{'姓名：' + user.name + ' 年龄：' + user.age}
        <Button type="primary" danger onClick={handleClick.bind(null,{name: 'update'})}> 更改用户信息 </Button>
      </p>
    </div>
  )
}

export default PageA