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

import setCampus from './reducers'
import fetchCampuses from './reducers'

// const getAllCampuses = () => {
//   store.dispatch(fetchCampuses())
// }

//import Campus from './containers/Campus'

// const getCampus = () => {
//   //store.dispatch(setCampus(id))
//   console.log("ID FROM MAIN", store)
// }

//Always add the history property to router or it wont render. 
render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="/campus/:id" component={IndividualCampus}/>
        <Route path="/students" component={Students} />
        <Route path="/students/id" component={IndividualStudent} />
        <Route path="/addstudent" component={AddStudent} />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
