import React from 'react'
import SignInButton from './signInButton'
// import DayPicker, { DateUtils } from 'react-day-picker'

const AttendanceRecordDetail = (props) => {
  const day = "October 19th, 2016" 
  
  return (
    <div className="col-sm-12 text-center">
      <p>Today is {day}</p>
      <SignInButton />
    </div>
  )
}

export default AttendanceRecordDetail
