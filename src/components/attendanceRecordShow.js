import React from 'react'
import SignInButton from './signInButton'
import Moment from 'react-moment';

const AttendanceRecordDetail = (props) => {
  function studentInfo() {
    if (props.student) {
      return <p>record for: {props.student.first_name} {props.student.last_name}</p>
    }
  }

  function recordInfo() {
    if (props.record) {
      if (props.record.arrived) {   
        const date = new Date(props.record.arrived_at)   
        return <p>arrived at: {date.toDateString()}</p>
      } else {
        return <p>absent or late</p>
      }
    }
  }
  return (
    <div className="jumbotron col-lg-8 text-center">
      <div className="col-sm-12">
        <div className="col-sm-12 text-center">
          {studentInfo()}
          {recordInfo()}
          <p>{props.day.toDateString()}</p>
          {props.currentUser.instructor ? null : <SignInButton />}
        </div>
      </div>
    </div>
  )
}

export default AttendanceRecordDetail

