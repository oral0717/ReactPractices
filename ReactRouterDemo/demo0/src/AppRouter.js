import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './Pages/index'
import List from './Pages/List'
import Item from './Pages/Item'

function AppRouter(){
  return (
    <Router>
      <Route path="/" exact component={Index}></Route>
      <Route path="/list/" exact component={List}></Route>
      <Route path="/list/:id" exact component={Item}></Route>
    </Router>
  )
}
export default AppRouter