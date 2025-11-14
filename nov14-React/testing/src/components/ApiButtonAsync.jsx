import React, { useState } from "react";

const ApiButtonAsync = () => {
  const [data, setData] = useState("");

  const callApi = async () => {
    try {
      const res = await fetch("/async-api");
      const json = await res.json();
      setData(json.message);
    } catch {
      setData("Error");
    }
  };

  return (
    <div>
      <button onClick={callApi}>Load (Async)</button>
      <p>{data}</p>
    </div>
  );
};

export default ApiButtonAsync;
