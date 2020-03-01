import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import {increase, decrease} from './store/actionCreators'
import { Button } from 'antd'
import 'antd/dist/antd.css'

class App extends Component {
  render(){
    const {increase,decrease} = this.props
    return (
      <Fragment>
        <Button
          type="primary"
          shape="circle"
          onClick={decrease}
        >-</Button>
        <span style={{'padding': '10px'}}>{this.props.count}</span>
        <Button
          type="primary"
          shape="circle"
          onClick={increase}
        >+</Button>
      </Fragment>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    increase() {
      dispatch(increase())
    },
    decrease() {
      dispatch(decrease())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
