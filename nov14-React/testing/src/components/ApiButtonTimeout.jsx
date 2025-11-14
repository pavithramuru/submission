import React, { useState } from "react";

const ApiButtonTimeout = () => {
  const [data, setData] = useState("");

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const callApi = async () => {
    await delay(500); // TIMEOUT ADDED

    try {
      const res = await fetch("/timeout-api");
      const json = await res.json();
      setData(json.message);
    } catch {
      setData("Error");
    }
  };

  return (
    <div>
      <button onClick={callApi}>Load (Timeout)</button>
      <p>{data}</p>
    </div>
  );
};

export default ApiButtonTimeout;
