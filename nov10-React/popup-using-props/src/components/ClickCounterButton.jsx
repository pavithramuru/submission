import React from "react";
import DisplayCount from "./DisplayCount"; 
const ClickCounterButton = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button
        style={{
          padding: "0.5rem 1rem",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>

      {/* Pass count as prop to child */}
      <DisplayCount count={count} />
    </div>
  );
};

export default ClickCounterButton;
