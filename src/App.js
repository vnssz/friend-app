import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import FriendList from "./FriendList"; // Import the FriendList component
import friendlistData from "./friendlist.json"; // Import the friendlist data

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username) => {
    // Perform any necessary actions upon successful login
    setCurrentUser(username);
  };

  const handleLogout = () => {
    // Perform any necessary actions upon logout
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <h1>FriendApp</h1>
      {!currentUser ? (
        <Login onLogin={handleLogin} />
      ) : (
      <>
          <button className="logout-button" onClick={handleLogout}>Logout</button> {/* Logout button */}
          <FriendList
            currentUser={currentUser}
            friends={friendlistData.results}
          />{" "}
          {/* Render FriendList component */}
        </>
      )}
    </div>
  );
};

export default App;
