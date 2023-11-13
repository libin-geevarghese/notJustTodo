// AuthContext.js
import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

const AuthContext = createContext();

function navReducer(state, action) {
  if (action === "home") {
    return {
      ...state,
      homeActive: true,
      comp1Active: false,
      comp2Active: false,
    };
  } else if (action === "comp1") {
    return {
      ...state,
      homeActive: false,
      comp1Active: true,
      comp2Active: false,
    };
  } else if (action === "comp2") {
    return {
      ...state,
      homeActive: false,
      comp1Active: false,
      comp2Active: true,
    };
  } else {
    return state;
  }
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const navInitialState = {
  homeActive: true,
  comp1Active: false,
  comp2Active: false,
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [FormLogin, setFormLogin] = useState(false);
  const [navState, navDispatch] = useReducer(navReducer, navInitialState);

  const logInForm = () => {
    setFormLogin(true);
    console.log("function called loginForm");
  };

  const logOff = () => {
    setLoggedIn(false);
    console.log("function called logOff");
  };

  const login = () => {
    console.log("function login called");
    setLoggedIn(true);
    setFormLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        FormLogin,
        loggedIn,
        navState,
        logInForm,
        logOff,
        login,
        navDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
