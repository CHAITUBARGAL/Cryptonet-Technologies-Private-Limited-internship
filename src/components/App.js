// App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => setUser(data.results[0]))
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User Profile</h1>
      </header>
      <div className="card">
        {user && (
          <div className="user-info">
            <div className="user-image">
              <img src={user.picture.large} alt="User" />
            </div>
            <div className="user-details">
              <p><strong>Name:</strong> <span className="user-info">{user.name.first} {user.name.last}</span></p>
              <p><strong>Gender:</strong> <span className="user-info">{user.gender}</span></p>
              <p><strong>Phone:</strong> <span className="user-info">{user.phone}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
