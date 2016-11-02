import React from 'react' 
import DayPicker, { DateUtils } from 'react-day-picker'

const StudentCalendar = (props) => {

  return (
    <div className='col-lg-6'>
      <DayPicker
        initialMonth={ new Date(2016, 9) }
        onDayClick={()=> { console.log("got it boss")}}
      />
    </div>

  )  


}
