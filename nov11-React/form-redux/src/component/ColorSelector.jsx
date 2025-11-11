import React from "react";

const ColorSelector = ({ setSelectedColor }) => {
  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ fontWeight: "bold", marginRight: "10px" }}>
        Select a Color:
      </label>
      <select onChange={handleChange} style={{ padding: "5px", cursor: "pointer" }}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  );
};

export default ColorSelector;
