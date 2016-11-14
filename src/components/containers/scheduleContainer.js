
import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker'
import "../../assets/calendar-style.css"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../styles/absent-present-calendar.css';
import AttendanceRecordShow from '../attendanceRecordShow';
import StudentsContainer from './studentsContainer';
import * as currentUserActions from '../../actions/currentUserActions';
import * as attendanceRecordActions from '../../actions/attendanceRecordActions';
import * as instructorActions from '../../actions/instructorActions';

class ScheduleContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {selectedStudent: null, selectedRecord: null, selectedDay: new Date()}
    this.selectStudent = this.selectStudent.bind(this)
    this.selectDay = this.selectDay.bind(this)
  }

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


  selectStudent(studentId) {
    const student = this.props.students.find(student => student.id == studentId)
    var that = this
    const recordsBySelectedDate = this.props.attendanceRecords.find(recordsByDate => {
      const date = new Date(recordsByDate.date)
        return date.toDateString() == that.state.selectedDay.toDateString()
    })
    const record = recordsBySelectedDate.records.find(record => record.student_id == studentId)
    this.setState({selectedStudent: student, selectedRecord: record})
  }

  selectDay(e, day) {
    e.preventDefault();
    if (this.state.selectedStudent) {
      const recordsBySelectedDate = this.props.attendanceRecords.find(recordsByDate => {
        const date = new Date(recordsByDate.date)
        return date.toDateString() == day.toDateString()
      })
      const record = recordsBySelectedDate.records.find(record => record.student_id == this.state.selectedStudent.id)
      this.setState({selectedRecord: record, selectedDay: day}) 
    } else {
      this.setState({selectedDay: day})
    }
  }

  isWeekend(day) {
    return (day.getDay() === 0 || day.getDay() === 6);
  }

  absentStudentIdsForSelectedDay() {
    if (this.props.attendanceRecords.length > 0) {
      var that = this
      const recordsBySelectedDate = this.props.attendanceRecords.find(recordsByDate => {
          const date = new Date(recordsByDate.date)
          return date.toDateString() == that.state.selectedDay.toDateString()
        })
      if (recordsBySelectedDate) {  
        const lateRecords = recordsBySelectedDate.records.filter(record => {
          return record.arrived == false
        })
        return lateRecords.map(record => record.student_id)
      }
    } else {
      return []
    }
  }

  studentsAbsentOnDay() {
    return this.props.attendanceRecords.map(recordsByDate => {
      if (recordsByDate.records.some(rec => rec.arrived == false)) {
        return recordsByDate
      }
    }).filter(recordsByDate => recordsByDate).map(recordsByDate => new Date(recordsByDate.date).toDateString())
  }

  render() {
    const modifiers = {
      absent: day => (this.studentsAbsentOnDay().includes(day.toDateString()) && !this.isWeekend(day)),
      present: day => (!this.studentsAbsentOnDay().includes(day.toDateString()) && !this.isWeekend(day))
    };

    return ( 
      <div>
        <div className="col-lg-12">
          {this.props.currentUser.instructor ? <StudentsContainer selectedStudent={this.state.selectedStudent} selectStudent={this.selectStudent} absentStudentIds={this.absentStudentIdsForSelectedDay()}/> : null}
          <div className='col-lg-6'>
            <DayPicker
            modifiers={modifiers}
            locale='us'
            disabledDays={this.isWeekend}
            selectedDays={day => DateUtils.isSameDay(this.state.selectedDay, day)}
            initialMonth={ new Date(2016, 9) }
            onDayClick={this.selectDay}/> 
          </div>
          <AttendanceRecordShow 
            day={this.state.selectedDay} 
            student={this.state.selectedStudent} 
            record={this.state.selectedRecord}
            currentUser={this.props.currentUser}/>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state, ownProps) {
  debugger;
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

