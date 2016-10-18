import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function attendanceRecordsReducer(state = initialState.attendanceRecords, action) {
  switch(action.type) {
    case types.FETCH_ATTENDANCE_RECORDS_SUCCESS:
      return action.payload
    default: 
      return state
  }
}