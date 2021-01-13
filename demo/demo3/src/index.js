import _ from 'lodash'
import printMe from './print.js'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello1', 'webpack2'], ' ')

  btn.innerHTML = 'Click me!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}