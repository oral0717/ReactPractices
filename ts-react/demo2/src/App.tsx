// import React from 'react';
// import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import router from './router';
import HookUseContext from './pages/HookUseContext'
function App() {
  return (
    <div className="app">
      <HookUseContext.Provider value={{ color: 'red' }}>
        {useRoutes(router)}
      </HookUseContext.Provider>
    </div>
  )
  // return (
  //   <Suspense fallback={<>loading</>}>
  //     {useRoutes(router)}
  //   </Suspense>
  // )
}

export default App;
