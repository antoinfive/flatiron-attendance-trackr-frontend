import React from 'react'
import SignInButton from './signInButton'
// import DayPicker, { DateUtils } from 'react-day-picker'

const AttendanceRecordDetail = (props) => {
  function studentInfo() {
    if (props.student) {
      return <p>record for: {props.student.first_name} {props.student.last_name}</p>
    }
  }

  function recordInfo() {
    if (props.record) {
      return <p>arrived: {props.record.arrived ? 'present' : 'absent or late'}, at: {props.record.created_at}</p>
    }
  }
  return (
    <div className="col-sm-12 text-center">
      {studentInfo()}
      {recordInfo()}
      <p>Today is {props.day}</p>
      <SignInButton />
    </div>
  )
}

export default AttendanceRecordDetail
