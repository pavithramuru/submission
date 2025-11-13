import React, { useEffect } from "react";
import "./PopupMessage.css";

const PopupMessage = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`popup-message ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default PopupMessage;
