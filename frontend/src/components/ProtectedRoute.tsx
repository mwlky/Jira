import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "../Utils";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");

  if(!isTokenValid(token)){
    localStorage.removeItem("token");
    return <Navigate to="/login" replace/>
  }

  return children;
};

export default ProtectedRoute;
