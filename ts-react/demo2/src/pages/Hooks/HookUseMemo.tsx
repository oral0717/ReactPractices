// useCallback用于缓存函数， useMemo缓存变量
// 1. 父组件更新，但是传入子组件的props无任何更新，子组件也会重复渲染，通过React.memo()将子组件包起来即可
// 2. 子组件传入的props是个方法时，需要在父组件用useCallback把该方法包起来，缓存函数，根据依懒项限制子组件重新执行次数
// 3. 组件中接收props,无论哪个props发生变化，整个组件重新执行，可用用useMemo把某个不希望重复执行的方法包起来，根据依懒项限制执行次数
import { Button } from 'antd'
import React, { useMemo, useState } from 'react'

interface Props { }
interface ChildProps {
  sex: string
  name: string
  handleChange?: () => void;
}

function HookUseMemo(props: Props) {
  const [name, setName] = useState('')
  const [sex, setSex] = useState('女')
  // const [age, setAge] = useState(12)
  const changeName = () => {
    setName(name + 'a')
  }
  const changeSex = () => {
    setSex(sex + 'b')
  }

  return (
    <>
      HookUseMemo使用：{`姓名-${name}`}
      <Button type="primary" onClick={changeName}>姓名</Button> |
      <Button type="primary" onClick={changeSex}>性别</Button>
      <HookUseMemoChild name={name} sex={sex} />
    </>
  )
}

export default HookUseMemo

const HookUseMemoChild = React.memo((props: ChildProps) => {
  const { name, sex } = props
  console.log('子组件渲染')
  const nameHandle = useMemo(() => {
    return name + (new Date().getTime())
  }, [name])// name变化，nameHandle才会执行
  return (
    <>
      子组件：姓名-{name},性别-{sex}, {nameHandle}
    </>
  )
})

// function HookUseMemoChild(props: ChildProps) {
//   // const { name, sex, age } = props
//   console.log('子组件渲染')
//   return (
//     <>
//       子组件
//     </>
//   )
// }


