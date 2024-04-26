import React from "react";


const Logout = ({ onLogout }) => {
  

  const logout = () => {
    // Your logout logic here
    // For example, clearing authentication tokens and resetting user state

    // Redirect to the login page

    // Notify the parent component or authentication service about the logout event
    onLogout();
  };

  return <button onClick={logout}>Logout</button>;
};

export default Logout;
