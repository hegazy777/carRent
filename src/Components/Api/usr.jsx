import { useState, useEffect } from 'react';
import axios from 'axios'; 

function User() {
  const [users, setUsers] = useState([]); 

 fdsfj // Function to fetch users
  const getUser = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
      setUsers(response.data); 
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getUser();
  }, []); 

  return (
    <div className="App">
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default User;
