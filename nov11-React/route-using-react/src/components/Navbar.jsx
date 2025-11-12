import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate("/"); // Redirect to home
    } else {
      navigate("/login"); // Go to login page
    }
  };

  return (
    <nav className="navbar">
      <div className="left-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
        <NavLink to="/fetch" className={({ isActive }) => isActive ? "active-link" : ""}>Fetch Data</NavLink>
      </div>
      <div className="right-nav">
        <button className="auth-btn" onClick={handleAuthClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
