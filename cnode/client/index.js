// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import App from './App'

// const root = document.getElementById('root')
// ReactDOM.render(<App />, root)

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App.js'

// ReactDOM.render(<App/>, document.getElementById('root'))
// ReactDOM.hydrate(<App/>, document.getElementById('root'))

const root = document.getElementById('root')
const render = (Component)=>{
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', ()=>{
    const NextApp = require('./App.js').default
    render(NextApp)
  })
}
