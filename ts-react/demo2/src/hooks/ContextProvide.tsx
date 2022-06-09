import React, { PropsWithChildren, Dispatch, createContext } from 'react'
import { StateProps, ActionProps } from '../reducer/a'
import _ from 'lodash'
export interface ContextProps {
  value: {
    state: StateProps[],
    dispatch: Dispatch<ActionProps>
  }
}
export const MyContext = createContext({} as ContextProps)

function ContextProvide(props: PropsWithChildren<ContextProps>) {
  return (
    <MyContext.Provider value={_.omit(props, 'children')}>
      {props.children}
    </MyContext.Provider>
  )
}

export default ContextProvide
