import React, { useState } from "react";
import friendlistData from "./friendlist.json";
import "./App.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = friendlistData.results.find(
      (user) =>
        user.login.username === username && user.login.password === password
    );

    if (user) {
      onLogin(user.login.username); // Send current user to parent component
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
