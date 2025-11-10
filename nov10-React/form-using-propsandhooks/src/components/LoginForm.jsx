import React, { useState } from "react";

const LoginForm = () => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  console.log("Current login state:", login);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login Attempt: ${login.username}`);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={login.username} onChange={handleChange} placeholder="Username" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={login.password} onChange={handleChange} placeholder="Password" required />
        </div>
        <div className="btn-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
