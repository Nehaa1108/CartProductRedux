import { useEffect, useState } from 'react';

function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/Dummy.json')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}

export default Fetch