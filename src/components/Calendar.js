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
        />
      </div>
      <p
        onClick={() => {
          alert(`New date is: ${test}`)
        }}
      >
        {value.toLocaleDateString()}
      </p>
    </>
  )
}
export default GetCalendar
