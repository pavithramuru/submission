// src/pages/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to SuperBank</h1>
        <p>Manage your accounts, users, and transactions effortlessly.</p>
        <div className="landing-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>

      {/* Floating shapes */}
      <span className="shape shape1"></span>
      <span className="shape shape2"></span>
      <span className="shape shape3"></span>
      <span className="shape shape4"></span>
    </div>
  );
};

export default Landing;
