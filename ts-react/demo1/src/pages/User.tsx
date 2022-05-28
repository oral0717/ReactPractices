import React, { Component } from 'react';
import { Outlet } from 'react-router-dom'
export default class User extends Component {
  render() {
    return (
      <>
        <div>User</div>
        <Outlet />
      </>
    )
  }
}