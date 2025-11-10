import React, { useState } from "react";

const RegisterForm = ({ onSubmit, placeholder }) => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    alert("Form Submitted!");
  };
  console.log("Current form state:", form);

  const handleClear = () => {
    setForm({ username: "", email: "", password: "" });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder={placeholder.username}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={placeholder.email}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder={placeholder.password}
            required
          />
        </div>
        <div className="btn-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
