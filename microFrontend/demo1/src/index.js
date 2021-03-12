import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {registerMicroApps, start} from 'qiankun'

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#root',
    activeRule: '/app-react',
  }
]);
start()
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
