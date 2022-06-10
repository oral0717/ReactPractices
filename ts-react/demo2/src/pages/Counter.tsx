// useState 即时获取变量最新的值
import { Button } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import HookUseContext from './HookUseContext'
interface Props {
  initValue: number
}

function Counter(props: Props) {
  const { initValue } = props
  const [count, setCount] = useState(initValue)
  const refTest = useRef(initValue)
  const colorObj = useContext(HookUseContext)
  const counter = () => {
    setCount(count => {
      const newCount = count + 1
      console.log(newCount) // 方法一：在回调函数里直接获取最新值
      refTest.current = newCount //方法二：利用ref来存放count最新的值
      return newCount
    })
  }
  // const counter = () => {
  //   setCount(count + 1)
  //   console.log(refTest, refTest.current) // 此处可以获得count最新的值refTest.current
  // }
  // useEffect(() => {
  //   // refTest.current 方法二：利用ref来存放count最新的值
  //   refTest.current = count + 1
  // }, [count])
  return (
    <>
      <div>{count}-{refTest.current}-{colorObj.color}</div>
      <Button onClick={counter} type='ghost' danger>add</Button>
    </>
  )
}

export default Counter
