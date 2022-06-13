// useImperativeHandle在当前组件render后执行行，可以让你在使用ref时自定义暴露给父组件的实例值

import { Button } from 'antd'
import React, { forwardRef, useRef, useImperativeHandle } from 'react'

interface Props { }

export function HookUseImperativeHandle(props: Props) {
  const childRef = useRef(null)
  const handleClick = () => {
    console.log(childRef) // 可以获取在子组件中 useImperativeHandle 调用的方法
    // childRef.current.value() // 调用报错？？？
  }
  return (
    <>
      使用useImperativeHandle
      <HookIhChild ref={childRef} />
      <Button onClick={handleClick}>父组件按钮</Button>
    </>
  )
}

interface childProps {
}
interface InputRefProps { }
// 子组件 forwardRef高阶组件 ref转发（透传）
export const HookIhChild = forwardRef<InputRefProps>((props: childProps, supperRef) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const onChange = (e: any) => {
    console.log(supperRef) // forwardRef高阶组件 ref转发（透传）
    inputRef.current?.focus()
  }
  // useImperativeHandle 父组件调用子组件的方法
  useImperativeHandle(supperRef, () => {
    return {
      value: 'oral',
      focusInput: onChange
    }
  })
  return (
    <div>
      子组件
      <input ref={inputRef} type="text" />
      {/* <input ref={supperRef} type="text" /> 使用父组件传入的ref报错？？？*/}
      <Button onClick={onChange}>子组件change</Button>
    </div>
  )
})
