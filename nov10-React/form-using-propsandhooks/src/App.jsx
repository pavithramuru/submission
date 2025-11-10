import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import DisplayData from "./components/DisplayData";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };
  console.log("Current formData:", formData);
  const registerPlaceholders = {
    username: "Enter your username",
    email: "Enter your email address",
    password: "Enter a strong password",
  };

  return (
    <div className="app-container">
      <h1>React Forms with Props & Hooks</h1>

      <div className="forms-row">
        {/* Registration Form */}
        <div className="form-box">
          <RegisterForm onSubmit={handleFormSubmit}  placeholder={registerPlaceholders} />
        </div>

        {/* Login Form */}
        <div className="form-box">
          <LoginForm />
        </div>

        {/* Display Submitted Data */}
        <div className="form-box">
          <DisplayData data={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;
