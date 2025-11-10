import React from "react";

const DisplayCount = ({ count }) => {
  return (
    <div>
      <h3 style={{ color: "#333" }}>Current Count: {count}</h3>
    </div>
  );
};

export default DisplayCount;
