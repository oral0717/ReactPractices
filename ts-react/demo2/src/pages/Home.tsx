import React from 'react'
// import { useSearchParams } from 'react-router-dom'
import Counter from './Counter'
import HookUseReducer from './Hooks/HookUseReducer'
import UseContextUseReducer from './Hooks/UseContextUseReducer'

interface Props { }

function Home(props: Props) {
  // const { } = props
  // const [searchParams] = useSearchParams() // 获取url 查询参数 ?xing=zhang&name=jie&name=22
  // console.log(5555, searchParams.get('xing'))// zhang
  // console.log(5555, searchParams.getAll('name')) // ['jie','22']

  return (
    <div>
      <div>计数器：<Counter initValue={1} /></div>
      <div>useReducer：
        <HookUseReducer></HookUseReducer>
      </div>
      <hr />
      <div>
        结合使用useContext
        <UseContextUseReducer></UseContextUseReducer>
      </div>
      <hr />
    </div>
  )
}

export default Home
