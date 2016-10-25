import React from 'react'
import SignInButton from './signInButton'
// import DayPicker, { DateUtils } from 'react-day-picker'

const AttendanceRecordDetail = (props) => {
  function studentInfo() {
    if (props.student) {
      return <p>record for: {props.student.first_name} {props.student.last_name}</p>
    }
  }
  return (
    <div className="col-sm-12 text-center">
      {studentInfo()}
      <p>Today is {props.day}</p>
      <SignInButton />
    </div>
  )
}

export default AttendanceRecordDetail
