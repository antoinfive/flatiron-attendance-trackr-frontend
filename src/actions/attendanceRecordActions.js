import * as types from './actionTypes';
import attendanceRecordApi from '../api/attendanceRecordApi';

function fetchAttendanceRecordsSuccess(payload) {
  return {type: types.FETCH_ATTENDANCE_RECORDS_SUCCESS, payload: payload}
}

export function fetchAttendanceRecords() {
  return function(dispatch) {
    return attendanceRecordApi.fetchAttendanceRecords().then(attRecordPayload => {
      dispatch(fetchAttendanceRecordsSuccess(attRecordPayload))
    })
  }
}

