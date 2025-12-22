import React, { useState, useEffect } from 'react'
import './style.css'

// (e.g., Local Time, UTC, GMT+1,
// EST, PST).

const timeZone = [
  { label: 'Local Time', value: 'local' },
  { label: 'UTC', value: 'utc' },
  { label: 'GMT+1', value: 'gmt' },
  { label: 'EST', value: 'est' },
  { label: 'PST', value: 'pst' }
]

const Clock = () => {

  const [time, setTimewise] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [zonewise, setZonewise] = useState('local')

  const handleChange = (e) => {
    setZonewise(e.target.value)
  }

  useEffect(() => {

    const dropdownzonetick = () => {

      if (zonewise === 'local') {
        const now = new Date()
        setTimewise({
          hours: now.getHours(),
          minutes: now.getMinutes(),
          seconds: now.getSeconds()
        })
      } else {

        const notindropdownformatt = new Intl.DateTimeFormat(
          'en-US',
          {
            timeZone: zonewise,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
          }
        )

        const formatpart = notindropdownformatt.formatToParts(new Date())
        const values = {}

        formatpart.forEach(key => {
          values[key.type] = Number(key.value)
        })

        setTimewise({
          hours: values.hour,
          minutes: values.minute,
          seconds: values.second
        })
      }
    }

    dropdownzonetick()
    const timeinterval = setInterval(dropdownzonetick, 1000)

    return () => clearInterval(timeinterval)

  }, [zonewise])

  const secondzonewise = time.seconds * 6
  const minutewise = time.minutes * 6 + time.seconds * 0.1
  const hourwise = (time.hours % 12) * 30 + time.minutes * 0.5

  return (
    <div>
      <h3>Clock</h3>

      <select
        className="dropdown"
        value={zonewise}
        onChange={handleChange}
      >
        {timeZone.map(time => (
          <option key={time.value} value={time.value}>
            {time.label}
          </option>
        ))}
      </select>

      <div className="clock">
        {[...Array(12)].map((_, i) => {
          const timeangle = i + 1
          return (
            <div key={timeangle} className="number">
              {timeangle}
            </div>
          )
        })}

        <div
          className="hand hour"
          style={{ transform: `rotate(${hourwise}deg)` }}
        ></div>

        <div
          className="hand minute"
          style={{ transform: `rotate(${minutewise}deg)` }}
        ></div>

        <div
          className="hand second"
          style={{ transform: `rotate(${secondzonewise}deg)` }}
        ></div>

        <div className="center-dot"></div>
      </div>
    </div>
  )
}

export default Clock
