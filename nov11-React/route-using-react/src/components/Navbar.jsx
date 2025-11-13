import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("username");

    if (token && storedUser) {
      setIsLoggedIn(true);
      setUsername(storedUser);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, [location]);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Clear user data
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      setIsLoggedIn(false);
      setUsername("");
      // Redirect to landing page
      navigate("/"); 
    } else {
      navigate("/login");
    }
  };
  

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/"
  ) {
    return null; // No navbar on Landing, Login, Register
  }
  

  return (
    <nav className="navbar">
      <div className="left-nav">
        <NavLink to="/home" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Contact
        </NavLink>
      </div>

      <div className="right-nav">
        {isLoggedIn && <span className="user-info">Welcome {username}</span>}
        <button className="auth-btn" onClick={handleAuthClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
