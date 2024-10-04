import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext'; 

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(UserContext); // Get loggedIn state from context

  return loggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
