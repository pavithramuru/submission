import React from "react";
import "./PageStyles.css";

const Login = () => {
  return (
    <div className="page">
      <h1>Login</h1>
      <p>Please enter your credentials to login.</p>
      <form className="contact-form">
        <label>Username</label>
        <input type="text" placeholder="Enter username" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
