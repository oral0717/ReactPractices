// import React from 'react';
// import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import router from './router';

function App() {
  return useRoutes(router)
  // return (
  //   <Suspense fallback={<>loading</>}>
  //     {useRoutes(router)}
  //   </Suspense>
  // )
}

export default App;
