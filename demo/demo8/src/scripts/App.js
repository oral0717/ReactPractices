import React, { Component } from 'react'
import { DatePicker } from 'antd'
import { hot } from 'react-hot-loader';
import 'antd/dist/antd.css'

class App extends Component{
  render() {
    return (
      <div>hello world<DatePicker/></div>
    )
  }
}

export default hot(module)(App)