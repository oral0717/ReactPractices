import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props { }

function User(props: Props) {
  const { } = props

  return (
    <div>user<Outlet /></div>
  )
}

export default User
