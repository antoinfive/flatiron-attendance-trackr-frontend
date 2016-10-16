class AttendanceRecordApi {
  static fetchAttendanceRecords() {
    return fetch('http://localhost:3000/fetchAttendanceRecords').then(response => {
      return response.json()
    }).then(attRecordPayload => {
      return attRecordPayload
    })
  }
}

export default AttendanceRecordApi