import React from 'react'
import { Route, Link } from 'react-router-dom'
import Work from './Work.js'
import Book from './Book.js'
function WorkPlace() {
  return (
    <div>
      <div className='topNav'>
        <ul>
          <li><Link to='/workplace/work'>work1</Link></li>
          <li><Link to='/workplace/book'>book</Link></li>
        </ul>
      </div>
      <div className='videoContent'>
        <Route path='/workplace/work/' component={Work}/>
        <Route path='/workplace/book/' component={Book}/>
      </div>
    </div>
  )
}

export default WorkPlace