import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext'; 

const PublicRoute = ({ children }) => {
  const { loggedIn } = useContext(UserContext); // Get loggedIn state from context

  return loggedIn ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
