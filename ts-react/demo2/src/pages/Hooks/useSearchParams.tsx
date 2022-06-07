import React from 'react'
import { useSearchParams } from 'react-router-dom'

interface Props { }

function Home(props: Props) {
  const { } = props
  const [searchParams] = useSearchParams() // 获取url 查询参数 ?xing=zhang&name=jie&name=22
  console.log(searchParams.get('xing'))// zhang
  console.log(searchParams.getAll('name')) // ['jie','22']

  return (
    <div>home</div>
  )
}

export default Home
