import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const navigate = useNavigate();  // Initialize navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("Password set successfully");
      // Navigate to the login page after successful password setup
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <header className="login-page-header">
        <h1 className="logo">
          <span role="img" aria-label="sun">☀️</span> Look Meal
        </h1>
      </header>
      <h2>Password Setup</h2>
      <p>After entering the password, press the "Set" button to start using the service.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
            <button
              type="button"
              className="toggle-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <small>Use 8-20 characters, including letters and numbers.</small>
        </div>

        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              required
            />
            <button
              type="button"
              className="toggle-button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Set
        </button>
      </form>
    </div>
  );
};

export default Login;
