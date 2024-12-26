import React, { useState } from "react";
import "./RegisteredUsers.css";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaTrophy, FaCog } from "react-icons/fa";

const RegisteredUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for registered users
  const users = [
    { id: 1, nickname: "Yuto", email: "example1@example.com", birthYear: "December 1993", gender: "Male", location: "Tokyo", registrationDate: "January 12, 2024" },
    { id: 2, nickname: "NicknameMax12Chars", email: "user234@example.net", birthYear: "May 1987", gender: "Female", location: "Tokyo", registrationDate: "January 12, 2024" },
    { id: 3, nickname: "DogLover", email: "test_user@gmail.com", birthYear: "October 1996", gender: "Male", location: "Tokyo", registrationDate: "January 12, 2024" },
    { id: 4, nickname: "Harukaze", email: "dummy_email_567@yahoo.co.jp", birthYear: "February 1998", gender: "Male", location: "Shizuoka", registrationDate: "January 12, 2024" },
    { id: 5, nickname: "Aoi", email: "ecampleaddress124e23@outlook.com", birthYear: "May 1978", gender: "Female", location: "Saitama", registrationDate: "January 11, 2024" },
    { id: 6, nickname: "Ponta", email: "random.user@example.org", birthYear: "June 1978", gender: "Male", location: "Tochigi", registrationDate: "January 11, 2024" },
    { id: 7, nickname: "Masayan", email: "email1234@example.co.jp", birthYear: "August 1972", gender: "Prefer not to say", location: "Kagoshima", registrationDate: "January 11, 2024" },
    { id: 8, nickname: "Natsuko", email: "user_test456@gmail.com", birthYear: "November 1969", gender: "Prefer not to say", location: "Ibaraki", registrationDate: "January 11, 2024" },
    { id: 9, nickname: "PyonPyon", email: "example_email@yahoo.com", birthYear: "April 1984", gender: "Female", location: "Tokyo", registrationDate: "January 10, 2024" },
    { id: 10, nickname: "Himawari", email: "dummy.address@example.net", birthYear: "April 1988", gender: "Other", location: "Fukuoka", registrationDate: "January 10, 2024" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.nickname.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

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
          <h1>  </h1>
          <div className="user-icon">👤</div>
        </header>
        

    <div className="registered-users-container">
      <h2>Registered Users</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by nickname or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="users-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nickname</th>
            <th>Email Address</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Location</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{String(index + 1).padStart(2, "0")}</td>
              <td>{user.nickname}</td>
              <td title={user.email}>{user.email}</td>
              <td>{user.birthYear}</td>
              <td>{user.gender}</td>
              <td>{user.location}</td>
              <td>{user.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 10 of 5,000 users</span>
        <span>
          <button>&lt;</button> 1 <button>&gt;</button>
        </span>
      </div>
    </div>
    </main>
</div>
  );
};

export default RegisteredUsers;
