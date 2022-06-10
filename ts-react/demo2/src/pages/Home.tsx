import { Button } from 'antd'
import React from 'react'
// import { useSearchParams } from 'react-router-dom'
import Counter from './Counter'
import HookUseCallback from './Hooks/HookUseCallback'
import HookUseMemo from './Hooks/HookUseMemo'
import HookUseReducer from './Hooks/HookUseReducer'
import UseContextUseReducer from './Hooks/UseContextUseReducer'
import { useMyHook } from './Hooks/useMyHook'
interface Props { }

function Home(props: Props) {
  // const { } = props
  // const [searchParams] = useSearchParams() // 获取url 查询参数 ?xing=zhang&name=jie&name=22
  // console.log(5555, searchParams.get('xing'))// zhang
  // console.log(5555, searchParams.getAll('name')) // ['jie','22']
  const [count, setCount] = useMyHook() // 使用自定义组件
  console.log(count, setCount)
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
      <div>
        <HookUseCallback />
      </div>
      <hr />
      <div>
        <HookUseMemo />
      </div>
      <hr />
      <div>
        使用自定义组件：<span>{count}</span>
        <Button onClick={() => { setCount() }}>自定义组件</Button>
      </div>

    </div>
  )
}

export default Home
