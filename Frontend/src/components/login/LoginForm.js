import React from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../AuthContext";
import "./loginform.css";

function LoginForm() {
  const { login } = useAuth();
  return (
    <div className="login">
      <p>
        <label>User Name</label>
        <input type="text" autoComplete="off" />
      </p>
      <p>
        <label>Password</label>
        <input type="text" autoComplete="off" />
      </p>
      <p>
        <button type="button" onClick={login}>
          Login
        </button>
        <NavLink to={"/signup"}>
          <button type="button" onClick={login}>
            sign up
          </button>
        </NavLink>
      </p>
    </div>
  );
}

export default LoginForm;
