import { useEffect, useState } from 'react';
import Data from './fetch/Data';
import Dummydata from './component/Dummydata';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/dummy.json')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
      </ul>
      <Data/>
      <Dummydata/>
    </div>
  );
}

export default App;
