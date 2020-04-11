import React,{ Component, Fragment } from 'react'
import PropTypes, { instanceOf } from 'prop-types'
import { AppState } from '../../store/app-state'
import { observer, inject } from 'mobx-react'
import './style.scss'

@inject('appState')
@observer
export default class TopicList extends Component{
  constructor(){
    super()
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount(){
    // do sth here
  }
  changeName(e){
    this.props.appState.changeName(e.target.value)
  }
  render(){
    return (
      <Fragment>
        <input type='text' onChange={this.changeName}/>
        <div>This is {this.props.appState.msg}</div>
      </Fragment>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}


