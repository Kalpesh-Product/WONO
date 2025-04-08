// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Check if token exists in localStorage when app loads
  useEffect(() => {
    const token = localStorage.getItem('token'); // or sessionStorage
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
