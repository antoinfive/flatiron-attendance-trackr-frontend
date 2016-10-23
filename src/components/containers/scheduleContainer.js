import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker'
import "../../assets/calendar-style.css"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AttendanceRecordContainer from '../containers/attendanceRecordContainer.js';
import * as currentUserActions from '../../actions/currentUserActions';
import * as attendanceRecordActions from '../../actions/attendanceRecordActions';
import * as instructorActions from '../../actions/instructorActions';


class ScheduleContainer extends React.Component {

  currentUserPresent() {
    return Object.keys(this.props.currentUser).length > 0 ? true : false
  }

  componentDidMount() {
    console.log('in CDM')
    if (!this.currentUserPresent()) {
      this.props.actions.fetchCurrentUser();
    }

    if (this.props.attendanceRecords.length == 0) {
      this.props.actions.fetchAttendanceRecords();
    }

  }

  render() {
    const currentUser = this.props.currentUser
    const attendanceRecords = this.props.attendanceRecords.map((record, i) => { 
      return <p key={i}>{record.date}</p>
    })

    return ( 
      <div>
        <div> {currentUser.first_name} </div>
        <div> {attendanceRecords} </div>
        {this.props.currentUser.instructor ? <StudentsContainer /> : null}
        <DayPicker
          initialMonth={ new Date(2016, 9) }
          onDayClick={(event, day) => {console.log(day)}}/> 
        <AttendanceRecordContainer />
      </div>

    )
  }
}

function mapStateToProps(state, ownProps) {
  if (state.currentUser.instructor) {    
    return {currentUser: state.currentUser, attendanceRecords: state.attendanceRecords, students: state.students}
  } else {
    return {currentUser: state.currentUser, attendanceRecords: state.attendanceRecords}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign(currentUserActions, attendanceRecordActions, instructorActions), dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);

