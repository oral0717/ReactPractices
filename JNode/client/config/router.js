import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import TopicList from '../views/TopicList'
import TopicDetail from '../views/TopicDetail'

export default class Router extends Component{
  render(){
    return [
      <Route key={1} path="/" component={TopicList} exact/>,
      <Route key={2} path="/detail" component={TopicDetail}/>
    ]
  }
}