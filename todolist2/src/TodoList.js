import React, { Component, Fragment } from 'react'
import { Input, Button, List, Typography } from 'antd'
import "antd/dist/antd.css"

import store from './store'
import {
  changeInputValue,
  addTodoItem,
  delTodoItem,
  getTodoList
} from './store/actionCreaters'

class App extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDelClick = this.handleDelClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render(){
    console.log(this.state)
    const { inputValue, list } = this.state
    return (
      <Fragment>
        <div style={{margin:'50px'}}>
          <Input
            size="large"
            placeholder="添加项目"
            style={{width:'400px',marginRight:'10px'}}
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            size="large"
            onClick={this.handleAddClick}>添加</Button>
        </div>
        <List
          bordered
          dataSource={list}
          renderItem={(item,index) => (
            <List.Item onClick={()=>(this.handleDelClick(index))}>
              <Typography.Text mark>[项目]</Typography.Text> {item}
            </List.Item>
          )}
          style={{margin: '0 50px', width:'400px'}}
        />
      </Fragment>
    )
  }
  componentDidMount(){
    const action = getTodoList()
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

  handleInputChange(e){
    const action = changeInputValue(e.target.value)
    store.dispatch(action)
  }

  handleAddClick(){
    const action = addTodoItem()
    store.dispatch(action)
  }

  handleDelClick(index){
    console.log(index)
    const action = delTodoItem(index)
    store.dispatch(action)
  }
}
export default App
