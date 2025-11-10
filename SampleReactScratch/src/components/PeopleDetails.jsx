import React from "react";

const PeopleDetails = ({ people }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {people.map((person, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            width: "80%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}
        >
          <h3 style={{ margin: "0 0 5px 0" }}>{person.name}</h3>
          <p style={{ margin: 0 }}>{person.details}</p>
        </div>
      ))}
    </div>
  );
};

export default PeopleDetails;