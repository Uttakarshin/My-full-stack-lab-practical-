import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching GitHub users:', error));
  }, []);

  return (
    <div>
      <h1>GitHub Users</h1>
      <div className="container">
        {users.map(user => (
          <div className="card" key={user.id}>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" />
            <div className="username">{user.login}</div>
            <a href={user.html_url} className="profile-link" target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
