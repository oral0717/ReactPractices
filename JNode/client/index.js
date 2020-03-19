import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import App from './views/App'

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component/>
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




