import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerMicroApps, start } from 'qiankun';

const initalContainer = document.getElementById("root");

function genActiveRule(routerPrefix) {
  return location => {
    console.log(location, location.pathname.startsWith(routerPrefix));
    return location.pathname.startsWith(routerPrefix);
  }
}

function render({ appContent, loading }) {
  ReactDOM.render(
    <App />,
    initalContainer
  )
}

render({ appContent: '', loading: true });

registerMicroApps([
  {
    name: 'demo2', // app name registered
    entry: '//localhost:3001',
    // container: '#yourContainer',
    render,
    activeRule: genActiveRule('/demo2')
  },
  {
    name: 'demo3',
    entry: '//localhost:3002',
    // container: '#yourContainer2',
    render,
    activeRule: genActiveRule('/demo3')
  },
]);

start();

