import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import "./components/Login.css";
import LoginPage from "./components/Loginpage";
import "./components/LoginPage.css";
import Dashboard from "./components/Dashboard";
import "./components/Dashboard.css";
import RegisteredUsers from "./components/RegisteredUsers";
import Winners from "./components/Winners";
import Administrator from "./components/Administrator";
import PasswordReset from "./components/PasswordReset";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/loginpage" element={<Login />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registered-users" element={<RegisteredUsers />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/administrator" element={<Administrator />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
