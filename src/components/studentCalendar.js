import React from 'react' 
import DayPicker, { DateUtils } from 'react-day-picker'
import "../assets/calendar-style.css"
import "../styles/absent-present-calendar.css"

export default (props) => {
  
  return (
    <div className='col-lg-6'>
      <DayPicker
        initialMonth={ new Date(2016, 9) }
        onDayClick={()=> { console.log("got it boss")}}
        modifiers={props.modifiers}
      />
    </div>

  )  


}


