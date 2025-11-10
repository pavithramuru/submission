import React, { useState } from "react";
import "./SimpleForm.css"; 
const SimpleForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name || "stranger"}!`);
  };

  return (
    <div className="form-container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
