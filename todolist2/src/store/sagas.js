import {takeEvery, put} from 'redux-saga/effects'
import { GET_TODO_LIST } from './actionTypes'
import { initTodoList } from './actionCreaters'
import axios from 'axios'

function* getTodoList(){
  try{
    const res = yield axios.get('/api/todolist')
    const action = initTodoList(res.data)
    yield put(action)
  }catch(e){
    console.log('网络请求失败',e.message)
  }

  // axios.get('/api/todolist').then((res)=>{
  //   const data = res.data
  //   const action = initTodoList(data)
  //   put(action) // store.dispatch(action)
  // })
}

function* todoSaga() {
  yield takeEvery(GET_TODO_LIST, getTodoList)
}

export default todoSaga;