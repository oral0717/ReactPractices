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
console.log(1111111111, module)

if (module.hot) {
  module.hot.accept('./App.js', ()=>{
    const NextApp = require('./App.js').default
    render(NextApp)
  })
}
