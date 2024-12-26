import React, { useState } from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaTrophy, FaCog } from "react-icons/fa";
import ChartComponent from "./ChartComponent";
const Dashboard = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleAccountClick = () => {
    // alert("My Account clicked!");
    setDropdownVisible(false); // Optionally hide dropdown
  };

  const handleLogoutClick = () => {
    alert("Logout clicked!");
    setDropdownVisible(false); // Optionally hide dropdown
    navigate("/"); // Navigate to login page
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span role="img" aria-label="sun">☀️</span> Look Meal
        </div>
        <nav className="menu">
      <ul>
        <li className="active">
          <Link to="/dashboard" className="menu-link">
            <FaHome className="menu-icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/registered-users" className="menu-link">
            <FaUser className="menu-icon" /> Registered Users
          </Link>
        </li>
        <li>
          <Link to="/winners" className="menu-link">
            <FaTrophy className="menu-icon" /> Winners
          </Link>
        </li>
        <li>
          <Link to="/administrator" className="menu-link">
            <FaCog className="menu-icon" /> Administrator
          </Link>
        </li>
      </ul>
    </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="user-menu">
            <div
              className="user-icon"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              👤
            </div>
            {dropdownVisible && (
              <div className="dropdown">
                <ul>
                  <li onClick={handleAccountClick}>My Account</li>
                  <li onClick={handleLogoutClick}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <section className="stats-overview">
          <div className="stat-card">
            <h3>Total number of registered users</h3>
            <p>
              <span className="stat-value">450 people</span>
              <span className="subtext">
                400 people (as of the previous month){" "}
                <span className="growth positive">↑12.5%</span>
              </span>
            </p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p>
              <span className="stat-value">50 people/month</span>
              <span className="subtext">
                12 people (as of the previous month){" "}
                <span className="growth positive">↑316.6%</span>
              </span>
            </p>
          </div>
          <div className="stat-card">
            <h3>Retention rate</h3>
            <p>
              <span className="stat-value">10%</span>
              <span className="subtext">
                12% (2 months ago){" "}
                <span className="growth negative">↓16.6%</span>
              </span>
            </p>
          </div>
          <div className="stat-card">
            <h3>Average number of searches</h3>
            <p>
              <span className="stat-value">4 times/</span>
              <span className="subtext">
                2 times per month (as of this day last month){" "}
                <span className="growth positive">↑100%</span>
              </span>
            </p>
          </div>
          <div className="stat-card">
            <h3>Number of times lottery is used</h3>
            <p>
              <span className="stat-value">125 times/month </span>
              <span className="subtext">
                85 times (as of this day last month){" "}
                <span className="growth positive">↑47%</span>
              </span>
            </p>
          </div>
          <div className="stat-card">
            <h3>Account deletions</h3>
            <p>
              <span className="stat-value">10 people/month </span>
              <span className="subtext">
                8 people (as of this day last month)
                <span className="growth positive">↑25%</span>
              </span>
            </p>
          </div>
        </section>

        <section className="chart-section">
          <h3>Account deletions</h3>
          <ChartComponent />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
