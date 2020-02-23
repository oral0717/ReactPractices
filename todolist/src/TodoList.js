import React, { Component, Fragment } from 'react'
import store from './store/index'
import TodoItem from './TodoItem'
import { getChangeInputAction, getAddItemAction, getDelItemAction } from './store/actionCreators'
// import axios from 'axios'
import './style.css'

class TodoList extends Component{
  constructor(){
    super()
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDel = this.handleDel.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render(){
    const { inputValue } = this.state
    return (
      <Fragment>
        <div>
          <input
            className='input'
            type='text'
            value={inputValue}
            ref={(input)=>{this.input=input}}
            onChange={this.handleChange} />
          <button
            onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }
  // componentDidMount(){
  //   axios.get('/api/todolist')
  //     .then((res)=>{
  //       this.setState((prevState)=>{
  //         return {
  //           list: [...prevState.list, ...res.data]
  //         }
  //       })
  //     })
  //     .catch((err)=>{
  //       console.log('err')
  //     })
  // }
  getTodoItem(){
    const { list } = this.state
    return  list.map((item, index)=>{
      return (
        <TodoItem
          key={index}
          index={index}
          item={item}
          onHandleDel={this.handleDel}/>
      )
    })
  }
  handleChange(e){
    // console.log(this.input.value)  // 通过ref获取值

    // const {value} = e.target
    // const action = {
    //   type: 'change_input_value',
    //   value
    // }
    const action = getChangeInputAction(e.target.value)

    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }

  handleSubmit(){
    // this.setState((prevState)=>{
    //   const { inputValue, list } = prevState
    //   return {
    //     list: [...list, inputValue],
    //     inputValue: ''
    //   }
    // })
    // const { inputValue, list} = this.state
    // const action = {
    //   type: 'add_todo_item',
    //   value: {
    //     list: [...list, inputValue],
    //     inputValue: ''
    //   }
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDel(index){
    // this.setState((prevState)=>{
    //   const { list } = prevState
    //   list.splice(index, 1)
    //   return {
    //     list: [...list]
    //   }
    // })
    // const { list } = this.state
    // list.splice(index, 1)
    // const action = {
    //   type: 'del_todo_item',
    //   value: {
    //     list: [...list]
    //   }
    // }
    const action = getDelItemAction(index)
    store.dispatch(action)
  }


}
export default TodoList