import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import appState from './store/app-state'
import App from './views/App'

import {configure} from 'mobx'; // 开启严格模式
configure({enforceActions: "observed"}) // 开启严格模式

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Provider appState={appState}>
          <Component/>
        </Provider>
      </BrowserRouter>
    </AppContainer>,
    root
  )
}

render(App)

if (module.hot){
  module.hot.accept('./views/App.js', ()=>{
    const NextApp = require('./views/App.js').default
    render(NextApp)
  })
}




