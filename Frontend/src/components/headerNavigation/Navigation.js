import React, { useEffect } from "react";
import "./navigation.css";
import { useAuth } from "../../AuthContext";
import { NavLink } from "react-router-dom";
function Navigation() {
  const { logOff, navState, navDispatch } = useAuth();

  useEffect(() => {
    // Set the initial state in the useEffect
    navDispatch("home");
  }, []);
  return (
    <div className="nav">
      <span className="list">
        <NavLink to="/dash">Dash Board</NavLink>
      </span>
      <span className="list">
        <NavLink
          to="/addnew"
          //future login logics pending/remove following
          // onClick={() => navDispatch("comp1")}
          // className={navState.comp1 ? "active" : ""}
        >
          Add New
        </NavLink>
      </span>
      <span className="list">
        <NavLink to="/events">Events</NavLink>
      </span>
      <NavLink to={"/"}>
        <button onClick={logOff}>Logoff</button>
      </NavLink>
    </div>
  );
}

export default Navigation;
