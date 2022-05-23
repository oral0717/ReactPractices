import React, { Component } from 'react'
interface IState {
  count: number
}
export default class State extends Component<any, IState> {
  constructor(props: any, context: any) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // static getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps')
  //   return { count: 0 }
  // }
  componentDidMount() {
    console.log('componentDidMount')
    for (let i = 0; i < 100; i++) {
      console.log(this.state.count)

      this.setState((state, props) => ({ count: state.count + 1 }))

    }
  }
  render() {
    console.log('render')
    return (
      <>{this.state.count}</>
    )
  }
}