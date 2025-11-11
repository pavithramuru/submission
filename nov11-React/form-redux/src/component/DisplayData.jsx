import React from "react";
import { useSelector } from "react-redux";

const DisplayData = () => {
  const { username, email, password, color, submittedData } = useSelector(
    (state) => state.form
  );

  return (
    <div>
      <h2>Live Data (Before Submit)</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Password:</strong> {password}
      </p>
      <p>
        <strong>Color Code:</strong> {color}
      </p>
      <div
        style={{
          width: "50px",
          height: "20px",
          backgroundColor: color,
          border: "1px solid #ccc",
        }}
      ></div>

      <hr />

      <h2>Submitted Data</h2>
      {submittedData ? (
        <div>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
          <p>
            <strong>Color Code:</strong> {submittedData.color}
          </p>
          <div
            style={{
              width: "50px",
              height: "20px",
              backgroundColor: submittedData.color,
              border: "1px solid #ccc",
            }}
          ></div>
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default DisplayData;
