import React from 'react'
import { Route, Link } from 'react-router-dom'
import Reactpage from './Reactpage'
import Flutter from './Flutter'
import Vue from './Vue'

function Video(){
  return (
    <div>
      <div className='topNav'>
        <ul>
          <li><Link to='/video/react'>React</Link></li>
          <li><Link to='/video/vue'>Vue</Link></li>
          <li><Link to='/video/flutter'>Flutter</Link></li>
        </ul>
      </div>
      <div className='videoContent'>
        <div><h3>视频教程</h3></div>
        <Route path="/video/react/" component={Reactpage}/>
        <Route path="/video/flutter/" component={Flutter}/>
        <Route path="/video/vue/" component={Vue}/>
      </div>
    </div>
  )
}

export default Video