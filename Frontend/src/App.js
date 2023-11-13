import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MainHeader from "./components/headerNavigation/MainHeader";
import { AuthProvider } from "./AuthContext";
import AddNewPage from "./routes/AddNewPage";
import DashPage from "./routes/DashPage";
import EventsPage from "./routes/EventsPage";
import HomePage from "./routes/HomePage.js";
import SignupPage from "./routes/SignupPage.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <MainHeader>
            {/* //conditional render needed
            //if  logged in navbar or else login navrbar */}
          </MainHeader>

          <span className="body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dash" element={<DashPage />} />
              <Route path="/addnew" element={<AddNewPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </span>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
