import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/' element={<AppLayout></AppLayout>} >
          <Route index element={<Home></Home>}></Route>
          <Route path='user' element={<User></User>}>
            <Route path='userDetail' element={<UserDetail></UserDetail>}></Route>
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
