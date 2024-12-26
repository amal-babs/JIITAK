import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (email === "admin@gmail.com" && password === "admin") {
      // alert("Login successful!");
      navigate("/dashboard"); // Navigate to Dashboard on success
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page-container">
      <header className="login-page-header">
        <h1 className="logo">
          <span role="img" aria-label="sun">☀️</span> Look Meal
        </h1>
      </header>

      <main className="login-page-main">
        <h2>Log in</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="forgot-password">
          <Link to="/passwordreset" className="menu">Forgot password?</Link>
        </p>
      </main>
    </div>
  );
};

export default LoginPage;
