import * as types from './actionTypes';
import instructorApi from '../api/instructorApi';

function fetchStudentsSuccess(payload) {
  return {type: types.FETCH_STUDENTS_SUCCESS, payload: payload}
}

export function fetchStudents() {
  return function(dispatch) {
    return instructorApi.fetchStudents().then(studentPayload => {
      dispatch(fetchStudentsSuccess(studentPayload))
    })
  }
}
