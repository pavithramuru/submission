// src/component/Clock.jsx
import React, { useState, useEffect } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-display" style={{ color: color }}>
      {time}
    </div>
  );
};

export default Clock;
