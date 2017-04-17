'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import store from './store'
import Root from './components/Root'
import Home from './components/Home'
import IndividualCampus from './components/IndividualCampus'
import Students from './containers/Students'
import AddStudent from './containers/AddStudent'
import IndividualStudent from './containers/IndividualStudent'

import Campus from './containers/Campus'

//Always add the history property to router or it wont render. 
render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="/campus" component={Campus}>
          <Route path="/campus/:id" component={IndividualCampus} />
        </Route>
        <Route path="/students" component={Students} />
        <Route path="/students/id" component={IndividualStudent} />
        <Route path="/addstudent" component={AddStudent} />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
