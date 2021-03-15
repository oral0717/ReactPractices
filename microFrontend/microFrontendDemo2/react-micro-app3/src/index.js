import React from 'react';
import ReactDOM from 'react-dom';
import './public-path'
import App from './App';

function render() {
  ReactDOM.render(<App />, document.getElementById('reactMicroAppRoot3'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('react-micro-app3 bootstraped');
}

export async function mount(props) {
  console.log('react-micro-app3 mount');
  render();
}

export async function unmount() {
  console.log('react-micro-app3 mount');
  ReactDOM.unmountComponentAtNode(document.getElementById('reactMicroAppRoot3'));
}
