import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state)) // 对象深拷贝
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(state.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DEL_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}