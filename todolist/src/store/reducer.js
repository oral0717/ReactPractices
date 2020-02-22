const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_todo_item'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value.inputValue
    newState.list = action.value.list
    return newState
  }
  if (action.type === 'del_todo_item'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value.list
    return newState
  }
  return state
}