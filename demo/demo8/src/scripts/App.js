import React, { Component } from 'react'
import { ConfigProvider, DatePicker } from 'antd'
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css'
import zhCN from 'antd/lib/locale/zh_CN';
import UserIntro from './pages/user/Intro'
import UserManagement from './pages/user/Management'
import BdPageA from './pages/bd/PageA'
import BdPageB from './pages/bd/PageB'

class App extends Component{
  render() {
    return (
      <Router>
        <ConfigProvider locale={zhCN}>hello world<DatePicker/></ConfigProvider>
        <ul>
          <li>
            <Link to="/">UserIntro</Link>
          </li>
          <li>
            <Link to="/UserManagement">UserManagement</Link>
          </li>
          <li>
            <Link to="/BdPageA">BdPageA</Link>
          </li>
          <li>
            <Link to="/BdPageB">BdPageB</Link>
          </li>
        </ul>
          <Route path="/" exact component={UserIntro}/>
          <Route path="/UserManagement" exact component={UserManagement}/>
          <Route path="/BdPageA" exact component={BdPageA}/>
          <Route path="/BdPageB" exact component={BdPageB}/>

      </Router>
    )
  }
}

export default hot(module)(App)