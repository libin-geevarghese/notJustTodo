import React from "react";
import { useAuth } from "../AuthContext";
import LoginForm from "../components/login/LoginForm";

function LoginPage() {
  const { FormLogin, loggedIn, logInForm, navState } = useAuth();

  if (FormLogin && !loggedIn) {
    return <LoginForm />;
  } else if (!FormLogin && !loggedIn) {
    return (
      <div className="header">
        <h3>This is Not Just a ToDo... !</h3>
        <button className="btnHeader" onClick={logInForm}>
          Login
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default LoginPage;
