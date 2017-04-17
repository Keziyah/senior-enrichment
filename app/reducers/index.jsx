import axios from 'axios'
import { combineReducers } from 'redux'

const initialStudentState = { 
  students: []
  }

const initialCampusState = {
  SelectedCampus: {}, 
  campuses: []
}

//***************************** */
//ACTION CONSTANTS
//***************************** */

export const ADD_CAMPUS = "ADD_CAMPUS"
export const SET_CAMPUS = "SET_CAMPUS"
export const EDIT_CAMPUS = "EDIT_CAMPUS"
export const DELETE_CAMPUS = "DELETE_CAMPUS"

export const ADD_STUDENT = "ADD_STUDENT"
export const EDIT_STUDENT = "EDIT_STUDENT"
export const DELETE_STUDENT = "DELETE_STUDENT"

export const FETCH_CAMPUSES = "FETCH_CAMPUSES"
export const FETCH_STUDENTS = "FETCH_STUDENTS"

//***************************** */
//ACTIONS
//***************************** */

//Promises are handled with redux-promise. 

export const addCampus = (newCampus) => {
  const request = axios.post(`/api/campuses`, newCampus)
  return {
    type: ADD_CAMPUS, 
    payload: request
  }
}

export const setCampus = (campusID) => {
  const request = axios.get(`/campuses/${campusID}`)

  return {
    type: SET_CAMPUS, 
    payload: request
  }
}

//We don't need to add deleteCampus to the reducer. Why?
//We can just delete the campus from the db, then redirect the 
//client to the homepage, where fetchCampuses will get all the 
//campuses, minus the one we deleted. 
export const deleteCampus = (campus) => {
  const request = axios.delete(`/api/campuses`, campus)

  return {
    type: DELETE_CAMPUS, 
    payload: request
  }
}

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT, 
    payload: student
  }
}

export const editStudent = (student) => {
  return {
    type: EDIT_STUDENT, 
    payload: student
  }
}

export const fetchCampuses = () => {
  const request = axios.get(`/api/campuses`)

  return {
    type: FETCH_CAMPUSES,
    payload: request
  }
}

//***************************** */
//REDUCERS
//***************************** */

const studentReducer = function(state = initialStudentState, action) {
  switch(action.type) {
    case ADD_STUDENT:
      console.log("NEW STUDENT", action.payload)
      let moreStudents = state.students.concat(action.payload)
      return {...state, students: moreStudents }
    default: return state
  }
}

const campusReducer = function(state = initialCampusState, action) {
   switch(action.type) {
    case ADD_CAMPUS: 
      console.log("NEW CAMPUS", action.payload.data)
      let moreCampuses = state.campuses.concat(action.payload.data)
      return {...state, campuses: moreCampuses} 
    case SET_CAMPUS: 
      console.log(action.payload)
      return {...state, SelectedCampus: action.payload}
    case FETCH_CAMPUSES: 
      return {...state, campuses: action.payload.data}
    case DELETE_CAMPUS: 
      return state
    default: 
      return state
  }
};


//***************************** */
//ROOT REDUCER
//***************************** */

const rootReducer = combineReducers({
  students: studentReducer, 
  campuses: campusReducer
})

export default rootReducer
