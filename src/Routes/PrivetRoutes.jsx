import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivetRoutes = ({children}) => {

  const {user,loading} =useContext(AuthContext);

  //show loading Spinier start,
    if(loading){
    return <span className="loading loading-infinity loading-lg"></span>
  }
 //show loading Spinier start,



  if(user){
    return children;
  }
    return (
       <Navigate to="/login"></Navigate>
    );
};

export default PrivetRoutes;