import React, { Component } from 'react'
import StudentCalendar from '../studentCalendar'
import * as currentUserActions from '../../actions/currentUserActions'
import * as attendanceRecordActions from '../../actions/attendanceRecordActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class StudentCalendarContainer extends Component {
  constructor(){
    super()
    this.absentDays = this.absentDays.bind(this)
  }

  componentDidMount(){
    if(!this.props.currentUser){
      this.props.actions.fetchCurrentUser();
    }

    if (this.props.attendanceRecords.length == 0) {
      this.props.actions.fetchAttendanceRecords()
    } 
  }
  
  absentDays() {
    let dates = this.props.attendanceRecords.filter( (record) => ( record.arrived == null) )
    return dates.map( (record) => ( new Date(record.date) )) 
  }

  render () {
    const modifiers = {
      absent: day => (this.absentDays().includes(day.toDateString()))
    }
    return (
      <div> 
        <h1> {this.absentDays()} </h1>
      <StudentCalendar 
        modifiers={modifiers} 
      />
    </div>   
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {currentStudent: state.currentUser, attendanceRecords: state.attendanceRecords }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(Object.assign(currentUserActions, attendanceRecordActions), dispatch)} 
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCalendarContainer)
