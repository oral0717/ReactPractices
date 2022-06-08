import React, { useReducer } from 'react'
import reducer from '../StudentReducer'
import studentData from '../studentData'
import { Button } from 'antd'
interface Props { }
// redux: reducer dispatch action
function HookUseReducer(props: Props) {
  // const {} = props
  const [state, dispatch] = useReducer(reducer, studentData)
  return (
    <>
      <div>{state.count}</div>
      <Button type="dashed" onClick={() => { dispatch({ type: 'add' }) }}>add</Button>
      <Button type="dashed" danger onClick={() => { dispatch({ type: 'sub' }) }}>sub</Button>
    </>
  )
}

export default HookUseReducer
