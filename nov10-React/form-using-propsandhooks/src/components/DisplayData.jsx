import React from "react";

const DisplayData = ({ data }) => {
  if (!data) {
    return <h3>No registration data submitted yet.</h3>;
  }

  return (
    <div>
      <h2>Submitted Data</h2>
      <p><strong>Username:</strong> {data.username}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Password:</strong> {data.password}</p>
    </div>
  );
};

export default DisplayData;
