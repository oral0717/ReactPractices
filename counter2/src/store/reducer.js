import { INCREASE, DECREASE } from './actionTypes'

const defaultState = {
  count: 0
}
const reducer = (state=defaultState, action)=>{
  if(action.type === INCREASE ){
    const newState = JSON.parse(JSON.stringify(state))
    newState.count = state.count + 1
    return newState
  }
  if(action.type === DECREASE ){
    const newState = JSON.parse(JSON.stringify(state))
    newState.count = state.count - 1
    return newState
  }
  return state
}

export default reducer