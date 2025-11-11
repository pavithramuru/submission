import React from "react";

const SelectedColorDisplay = ({ color }) => {
  return (
    <div style={{ fontSize: "1.2rem", marginTop: "10px" }}>
      Selected color: <span style={{ color }}>{color}</span>
    </div>
  );
};

export default SelectedColorDisplay;
