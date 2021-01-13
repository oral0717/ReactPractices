import _ from 'lodash'
import './style.css'
import icoFavicon from './images/favicon.ico'

function component() {
  const element = document.createElement('div')
  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  // 加入样式
  element.classList.add('hello');
  // 加入图片
  const myIco = new Image()
  myIco.src = icoFavicon
  element.appendChild(myIco)

  return element
}

document.body.appendChild(component())