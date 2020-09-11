import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'  ;




 
const CalendarC = () => {
    let [date, setDate] = useState(new Date());
    let onChange = () => {
        setDate(date)
    }
    
    return(
        <div>
            <Calendar  onChange={onChange} defaultValue={date} />
            {console.log(date)}
            {date.toString()}
        </div>
            )
  }

  export default CalendarC;
 