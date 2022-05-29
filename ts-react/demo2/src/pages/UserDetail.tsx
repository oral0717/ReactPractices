import React from 'react'
import { useParams } from 'react-router-dom'

interface Props { }

function UserDetail(props: Props) {
  const { } = props
  const { userId } = useParams() // 获取url上的参数

  return (
    <>userDetail--userId={userId}</>
  )
}

export default UserDetail
