// useContext useReducer联合使用
import { Button } from 'antd'
import React, { useContext } from 'react'
import { MyContext } from '../../components/ContextProvide'
interface Props { }

function UseContextUseReducer(props: Props) {
  const { value: { state, dispatch } } = useContext(MyContext)

  return (
    <>
      {state.map(i => {
        return (
          <div key={i.id}>
            <div>{i.text}-{i.isFinished ? 'true' : 'false'}</div>
            <Button onClick={() => { dispatch({ type: 'CHANGE_FINISHED', id: i.id }) }}> 修改</Button>
          </div>
        )
      })}
    </>
  )
}

export default UseContextUseReducer
