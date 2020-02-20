import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  static propTypes = {
    item: PropTypes.string,
    index: PropTypes.number,
    onHandleDel: PropTypes.func,
    test: PropTypes.string
  }
  static defaultProps = {
    test: 'xx'
  }

  render(){
    const { item, test} = this.props
    return (
      <li onClick={this.handleClick}>{test} - {item}</li>
    )
  }

  handleClick(){
    const { onHandleDel, index } = this.props
    onHandleDel(index)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item !== this.props.item){
      return true
    } else {
      return false
    }
  }
}