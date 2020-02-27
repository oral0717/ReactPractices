import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_TODO_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const addTodoItem = () => ({
  type: ADD_TODO_ITEM
})
export const delTodoItem = (index) => ({
  type: DEL_TODO_ITEM,
  index
})
export const initTodoList = (data) => ({
  type: INIT_TODO_LIST,
  data
})
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then((res)=>{
      const data = res.data
      const action = initTodoList(data)
      dispatch(action)
    })
  }
}