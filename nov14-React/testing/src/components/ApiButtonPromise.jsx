import React, { useState } from "react";

const ApiButtonPromise = () => {
  const [data, setData] = useState("");

  const callApi = () => {
    fetch("/promise-api")
      .then((res) => res.json())
      .then((json) => setData(json.message))
      .catch(() => setData("Error"));
  };

  return (
    <div>
      <button onClick={callApi}>Load (Promise)</button>
      <p>{data}</p>
    </div>
  );
};

export default ApiButtonPromise;
