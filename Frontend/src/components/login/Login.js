import React, { useState } from "react";
// import "./navigation.css";
// import Navigation from "../headerNavigation/Navigation";
import { useAuth } from "../../AuthContext";
import { NavLink } from "react-router-dom";

function Login() {
  const { logInForm } = useAuth();

  return (
    <div className="nav">
      <NavLink to={"/"}>
        <button onClick={logInForm}>Login</button>
      </NavLink>
    </div>
  );
}
export default Login;
