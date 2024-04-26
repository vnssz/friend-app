// Navbar.js

import React, { useState } from "react";

const Navbar = ({ onLogin, friends }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Find the friend with the entered username
    const friend = friends.find((friend) => friend.login.username === username);

    // Check if the friend exists and the password matches
    if (friend && friend.login.password === password) {
      setLoggedIn(true);
      onLogin(username);
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>My App</h1>
        {loggedIn ? (
          <div className="user-info">
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="login-form">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p className="error">{error}</p>}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
