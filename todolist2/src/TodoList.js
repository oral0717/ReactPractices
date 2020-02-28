import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Input, Button, List, Typography } from 'antd'
import { changeInputValue, addTodoItem, delTodoItem} from './store/actionCreaters'
import "antd/dist/antd.css"

const App = (props) => {
  const { inputValue, list, changeInputValue, addTodoItem, delTodoItem } = props
  return (
    <Fragment>
      <div style={{margin:'50px'}}>
        <Input
          size="large"
          placeholder="添加项目"
          style={{width:'400px',marginRight:'10px'}}
          value={inputValue}
          onChange={changeInputValue}
        />
        <Button
          type="primary"
          size="large"
          onClick={addTodoItem}>添加</Button>
      </div>
      <List
        bordered
        dataSource={list}
        renderItem={(item,index) => (
          <List.Item onClick={()=>(delTodoItem(index))}>
            <Typography.Text mark>[项目]</Typography.Text> {item}
          </List.Item>
        )}
        style={{margin: '0 50px', width:'400px'}}
      />
    </Fragment>
  )
}
class App2 extends Component {
  render(){
    const { inputValue, list, changeInputValue, addTodoItem, delTodoItem } = this.props
    return (
      <Fragment>
        <div style={{margin:'50px'}}>
          <Input
            size="large"
            placeholder="添加项目"
            style={{width:'400px',marginRight:'10px'}}
            value={inputValue}
            onChange={changeInputValue}
          />
          <Button
            type="primary"
            size="large"
            onClick={addTodoItem}>添加</Button>
        </div>
        <List
          bordered
          dataSource={list}
          renderItem={(item,index) => (
            <List.Item onClick={()=>(delTodoItem(index))}>
              <Typography.Text mark>[项目]</Typography.Text> {item}
            </List.Item>
          )}
          style={{margin: '0 50px', width:'400px'}}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { inputValue, list } = state
  return {
    inputValue,
    list
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeInputValue(e){
      dispatch(changeInputValue(e.target.value))
    },
    addTodoItem(){
      dispatch(addTodoItem())
    },
    delTodoItem(index){
      dispatch(delTodoItem(index))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)
