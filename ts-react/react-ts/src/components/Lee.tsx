import React, { Component } from 'react'
interface IUser {
  name: string
}
interface IProps {
  name: string,
  age?: number,
  user?: IUser
}
interface IState {
  count: number
}
export default class Lee extends Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props)
    this.state = {
      count: 1
    }
  }
  static getDerivedStateFromProps(props: IProps): IState {
    console.log("getDerivedStateFromProps")
    return {
      count: 1
    }
  }
  shouldComponentUpdate() {
    console.log("componentShouldUpdate")
    return true
  }
  componentDidMount() {
    console.log('Lee componentDidMount?')
  }
  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <h2>{this.props.age}</h2>
        <h2>{this.props.user?.name}</h2>
      </>
    )
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}