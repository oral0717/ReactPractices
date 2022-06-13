import React, { FC, useReducer, Dispatch } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import router from './router';
import aReducer, { StateProps, ActionProps } from './reducer/a'
import aState from './store/a'

import ContextProvide from './components/ContextProvide'

interface ContextProps {
  state: StateProps[]
  dispatch: Dispatch<ActionProps>
}
const App: FC = () => {
  const initState: StateProps[] = aState.list
  const [state, dispatch] = useReducer(aReducer, initState)
  const transferParams: ContextProps = { state, dispatch }
  return (
    <div className="app">
      <ContextProvide value={transferParams}>
        {useRoutes(router)}
      </ContextProvide>
    </div>
  )

}

export default App;
