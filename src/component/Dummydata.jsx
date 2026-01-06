import React, { useEffect,useState } from 'react'

const Dummydata = () => {

  const [users,setUsers] = ([])

  useEffect(()=>
  {
    fetch('/Dummy.json')
    .then(res=>res.json())
    .then(data=> {setUsers(data)})
     .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  } 
  
  ,[])
  return (
    <div>
      <h2>Dummy data-</h2>
      <ul>
        {
          users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
        
      </ul>
    </div>
  )
}

export default Dummydata