// import React, { useState, useEffect } from 'react'
// import './style.css'

// // (e.g., Local Time, UTC, GMT+1, EST, PST)

// const timeZone = [
//   { label: 'Local Time', value: 'local' },
//   { label: 'UTC', value: 'UTC' },
//   { label: 'GMT+1', value: 'Etc/GMT-1' },
//   { label: 'EST', value: 'America/New_York' },
//   { label: 'PST', value: 'America/Los_Angeles' }
// ]

// const Clock = () => {
//   const [time, setTimewise] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   })

//   const [zonewise, setZonewise] = useState('local')

//   const handleChange = (e) => {
//     setZonewise(e.target.value)
//   }

//   useEffect(() => {
//     const dropdownzonetick = () => {
//       if (zonewise === 'local') {
//         const now = new Date()
//         setTimewise({
//           hours: now.getHours(),
//           minutes: now.getMinutes(),
//           seconds: now.getSeconds()
//         })
//       } else {
//         const formatter = new Intl.DateTimeFormat('en-US', {
//           timeZone: zonewise,
//           hour: 'numeric',
//           minute: 'numeric',
//           second: 'numeric',
//           hour12: false
//         })

//         const parts = formatter.formatToParts(new Date())
//         const values = {}

//         parts.forEach(part => {
//           values[part.type] = Number(part.value)
//         })

//         setTimewise({
//           hours: values.hour,
//           minutes: values.minute,
//           seconds: values.second
//         })
//       }
//     }

//     dropdownzonetick()
//     const interval = setInterval(dropdownzonetick, 1000)

//     return () => clearInterval(interval)
//   }, [zonewise])

//   const secondzonewise = time.seconds * 6
//   const minutewise = time.minutes * 6 + time.seconds * 0.1
//   const hourwise = (time.hours % 12) * 30 + time.minutes * 0.5

//   return (
//     <div>
//       <h3>Clock</h3>

//       <select
//         className="dropdown"
//         value={zonewise}
//         onChange={handleChange}
//       >
//         {timeZone.map(t => (
//           <option key={t.value} value={t.value}>
//             {t.label}
//           </option>
//         ))}
//       </select>

//       <div className="clock">
//         {[...Array(12)].map((_, i) => (
//           <div key={i} className="number">
//             {i + 1}
//           </div>
//         ))}

//         <div
//           className="hand hour"
//           style={{ transform: `rotate(${hourwise}deg)` }}
//         ></div>

//         <div
//           className="hand minute"
//           style={{ transform: `rotate(${minutewise}deg)` }}
//         ></div>

//         <div
//           className="hand second"
//           style={{ transform: `rotate(${secondzonewise}deg)` }}
//         ></div>

//         <div className="center-dot"></div>
//       </div>
//     </div>
//   )
// }

// export default Clock

import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
      <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }} />
      <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }} />
    </div>
  );
}

export default Clock;
