import React, { Component } from 'react'
import { ConfigProvider } from 'antd'
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
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
        <ConfigProvider locale={zhCN}>
          <div>
            <div>主应用</div>
            <Route path="/" exact component={UserIntro}/>
            <Route path="/UserManagement" exact component={UserManagement}/>
            <Route path="/BdPageA" exact component={BdPageA}/>
            <Route path="/BdPageB" exact component={BdPageB}/>
          </div>
        </ConfigProvider>
      </Router>
    )
  }
}

export default hot(module)(App)