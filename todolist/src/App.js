import React, { Component, Fragment } from 'react'
import TodoList from './TodoList'
// import Animation from './Animation/index'

class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoList/>
        {/* <Animation/> */}
      </Fragment>
    )
  }
}
export default App