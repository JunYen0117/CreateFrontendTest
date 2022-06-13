import React, { useState } from 'react'
import Calendar from 'react-calendar'

function GetCalendar() {
  const [value, setValue] = useState(new Date())
  const [test, setTest] = useState(0)

  return (
    <>
      <div>
        <Calendar
          onChange={(value) => {
            setValue(value)
          }}
          value={value}
          minDate={new Date(2022, 5, 1)}
          maxDate={new Date(2022, 6, 30)}
        />
      </div>
      <p
        onClick={() => {
          alert(`New date is: ${test}`)
        }}
      >
        {value.toLocaleDateString().replace(/\//g, '-')}
      </p>
    </>
  )
}
export default GetCalendar
