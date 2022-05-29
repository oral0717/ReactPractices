
import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

interface Props { }

function Login(props: Props) {
  const { } = props
  const navigate = useNavigate()
  const login = () => {
    navigate('/')
  }
  return (
    <div>
      login
      <Button onClick={login} type="primary">登录</Button>
    </div>
  )
}

export default Login
