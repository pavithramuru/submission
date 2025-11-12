import React from "react";
import { Link } from "react-router-dom";
import "./PageStyles.css";

const ErrorPage = () => {
  return (
    <div className="page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
