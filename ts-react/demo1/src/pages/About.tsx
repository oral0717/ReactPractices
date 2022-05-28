import React, { Component } from 'react';
import { Outlet } from 'react-router-dom'
export default class About extends Component {
  render() {
    return (
      <>
        <div>About1111</div>
        <Outlet />
      </>
    )
  }
}