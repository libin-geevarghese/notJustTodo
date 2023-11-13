import React from "react";
import Navigation from "./Navigation";
import Login from "../login/Login";
import "./header.css";
import { useAuth } from "../../AuthContext";

function MainHeader() {
  const { loggedIn } = useAuth();

  return (
    <div className="navbar">
      <h3 className="header-welcome">Welcome</h3>
      {loggedIn ? <Navigation /> : <Login />}
    </div>
  );
}

export default MainHeader;
