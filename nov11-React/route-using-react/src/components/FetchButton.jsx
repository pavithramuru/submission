import React, { useState, useEffect } from "react";

const FetchButton = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example API: JSONPlaceholder posts
        const response = await fetch("https://us cnn.com")
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();

        // Log data to the console
        console.log("Fetched data:", jsonData.slice(0, 10)); // first 10 items
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // runs once on component mount

  return (
    <div style={{ padding: "20px" }}>
      <h2>Check the console to see fetched data</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default FetchButton;
