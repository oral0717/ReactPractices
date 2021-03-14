import React from 'react';
import ReactDOM from 'react-dom';
import './public-path'
import App from './App';

function render() {
  ReactDOM.render(<App />, document.getElementById('reactMicroAppRoot2'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('react-micro-app2 bootstraped');
}

export async function mount(props) {
  console.log(props);
  render();
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('reactMicroAppRoot2'));
}

