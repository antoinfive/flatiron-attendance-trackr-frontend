import React, { Component } from 'react'
import AttendanceRecordDetail from '../attendanceRecordDetail'

class AttendanceRecordContainer extends Component {
  
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center">
        <div className="col-sm-12">
          <AttendanceRecordDetail /> 
        </div>
      </div>
        )

  }

}

export default AttendanceRecordContainer
