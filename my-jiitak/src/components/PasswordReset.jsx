import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);  // New state to track email sent status
  
  // Email validation function using regular expression
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Check if the email is valid
    if (email && validateEmail(email)) {
      setMessage(`A password reset link has been sent to ${email}. Please check your inbox.`);
      setEmailSent(true);  // Mark the email as sent
    } else {
      setMessage("Please enter a valid email address.");
      setEmailSent(false); // Reset the email sent status
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
        <h2>Reset Password</h2>
        <p>
          Please enter your current email address.
          We will send you a link to reset your password via email.
        </p>
        <form className="login-form" onSubmit={handleResetPassword}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Send a URL for resetting your password
          </button>
        </form>

        {message && <p className="success-message">{message}</p>}

        {/* Show the "Set New Password" link only if email has been sent successfully */}
        {emailSent && (
          <p className="set-new-password">
            <Link to="/loginpage" className="menu">Set new password</Link>
          </p>
        )}

        <p className="forgot-password">
          <Link to="/" className="menu">Return to login screen</Link>
        </p>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
