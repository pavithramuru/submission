import React from "react";

const popupStyle = {
  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  padding: "3rem",
  border: "1px solid #ccc",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  borderRadius: "10px",
  zIndex: 1000,
  textAlign: "center",
  minWidth: "300px",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  background: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "1rem",
};

const PopupMessage = ({ title, message, count, onClose }) => {
  return (
    <div style={popupStyle}>
      <h2>{title}</h2>
      <p>{message}</p>
      <button style={buttonStyle} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default PopupMessage;
