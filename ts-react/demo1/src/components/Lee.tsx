import { Component } from 'react'
interface IProps {
  name: string
  age?: number

}
interface IState {
  name: string
  room: string
}
export default class Lee extends Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props)
    this.state = {
      name: 'stateName',
      room: '201'
    }
  }
  static getDerivedStateFromProps(nextProps: IProps, prevState: IState): any {
    console.log('getDerivedStateFromProps', nextProps, prevState)
    return {
      a: 123
    } // return null 不更新state
  }
  componentDidMount() {
    console.log(11)
  }
  shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return false
  }
  render() {
    const { name, room } = this.state
    return (
      <>
        <div className="">name:{name},room:{room}</div>
        <button onClick={this.changeState.bind(this)}>改变room</button>
      </>
    )
  }
  getSnapshotBeforeUpdate(prevProps: IProps, prevState: IState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return {
      oral: 11
    }
  }
  componentDidUpdate(props: IProps, state: IState, snapshot: any) {
    console.log('componentDidUpdate', props, state, snapshot)
  }
  changeState(event: any) {
    this.setState((state, props) => ({
      room: '202'
    }))
  }
}