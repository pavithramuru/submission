import React, { useState } from "react";
import FormComponent from "./component/FormComponent";
import DisplayData from "./component/DisplayData";
import Clock from "./component/Clock";
import ColorSelector from "./component/ColorSelector";
import SelectedColorDisplay from "./component/SelectedColorDisplay";
import "./App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <div className="app-container">
      <h1 className="main-title">Registration Dashboard</h1>

      <div className="forms-row">
        <div className="form-box">
          <h2>Register Form</h2>
          <FormComponent />
        </div>

        <div className="form-box">
          <DisplayData />
        </div>
      </div>

      <div className="form-box clock-section">
        <h2>Live Clock & Color Selector</h2>
        <Clock color={selectedColor} />
        <ColorSelector setSelectedColor={setSelectedColor} />
        <SelectedColorDisplay color={selectedColor} />
      </div>
    </div>
  );
};

export default App;
