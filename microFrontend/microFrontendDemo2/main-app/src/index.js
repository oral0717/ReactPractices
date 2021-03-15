import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerMicroApps, start } from 'qiankun';

function render({ ...rest }) {
  const container = document.getElementById('root');
  ReactDOM.render(<App loading={rest.loading} content={rest.appContent} />, container);
}

render({ loading: true });

// 子应用激活规则
function genActiveRule(routerPrefix) {
  return location => {
    return location.pathname.startsWith(routerPrefix)
  };
} 

registerMicroApps([
  {
    name: 'reactmicroapp1',
    entry: '//localhost:8081',
    render,
    activeRule: genActiveRule('/reactmicroapp1')
  },
  {
    name: 'reactmicroapp2',
    entry: '//localhost:8082',
    render,
    activeRule: genActiveRule('/reactmicroapp2')
  },
  {
    name: 'reactmicroapp3',
    entry: '//localhost:8083',
    render,
    activeRule: genActiveRule('/reactmicroapp3')
  },
]);

start();
