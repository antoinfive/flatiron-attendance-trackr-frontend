import React, { Component } from 'react'
import StudentCalendar from '../studentCalendar''

class StudentCalendarContainer extends Component {
  
  render () {
    return ( 
      <StudentCalendar />      
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {currentStudent: state.currentUser, attendanceRecords: state.attendanceRecords }
}
