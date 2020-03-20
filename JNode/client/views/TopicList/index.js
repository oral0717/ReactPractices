import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'
import { observer, inject } from 'mobx-react'

@inject('appState')
@observer
export default class TopicList extends Component{
  componentDidMount(){
    // do sth here
  }
  render(){
    return (
      <div>{this.props.appState.msg}</div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}