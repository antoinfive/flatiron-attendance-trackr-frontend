import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function attendanceRecordsReducer(state = initialState.students, action) {
  switch(action.type) {
    case types.FETCH_STUDENTS_SUCCESS:
      return action.payload
    default: 
      return state
  }
}