import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

class Animation extends Component {
  constructor(){
    super()
    this.state = {
      isShow: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render(){
    return (
      <Fragment>
        <div
          className={this.state.isShow ? 'show': 'hide'}
        >Hello Animation !</div>
        <CSSTransition>
          <div>react-transition-group</div>
        </CSSTransition>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    )
  }

  handleClick(){
    this.setState((prevState)=>{
      return {
        isShow: !prevState.isShow
      }
    })
  }
}

export default Animation