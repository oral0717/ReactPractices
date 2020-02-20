import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component{
  constructor(){
    super()
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDel = this.handleDel.bind(this)
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
    console.log(this.input.value)  // 通过ref获取值
    const {value} = e.target
    this.setState(() => {
      return {
        inputValue: value
      }
    })
  }

  handleSubmit(){
    this.setState((prevState)=>{
      const { inputValue, list } = prevState
      return {
        list: [...list, inputValue],
        inputValue: ''
      }
    })
  }

  handleDel(index){
    this.setState((prevState)=>{
      const { list } = prevState
      list.splice(index, 1)
      return {
        list: [...list]
      }
    })
  }
}
export default TodoList