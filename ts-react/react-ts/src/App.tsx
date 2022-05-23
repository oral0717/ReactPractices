import React, { Component } from 'react';
import Lee from './components/Lee'
// import State from './components/State'
import './App.css';
interface IState {
  showLee: boolean
}
class App extends Component<any, IState> {
  constructor(props: any, context: any) {
    super(props)
    this.state = {
      showLee: true
    }
  }
  change = () => {
    console.log('change')
    this.setState((state, props) => ({
      showLee: !state.showLee
    }))
  }
  render() {
    const { showLee } = this.state
    return (
      <>
        {/* <Lee name="this.name1" /> */}
        {/* <hr />
        <Lee name="this.name2" age={12}></Lee>
        <hr /> */}
        {
          showLee ?
            <Lee name="this.name2" age={11} user={{ name: 'oral' }}></Lee> :
            null
        }

        <button type="button" onClick={this.change.bind(this)}>点击我</button>
        <hr />
        {/* <State /> */}
      </>
    )
  }
}

export default App;
