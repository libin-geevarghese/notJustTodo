import React from "react";
import LoginPage from "./LoginPage";
import { useAuth } from "../AuthContext.js";
import Dash from "../components/dash/DashBoard.js";

function HomePage() {
  const { loggedIn } = useAuth();
  return (
    <React.Fragment>
      {loggedIn == true ? <Dash /> : <LoginPage />}
    </React.Fragment>
  );
}

export default HomePage;
