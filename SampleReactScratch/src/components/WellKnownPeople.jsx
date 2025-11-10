import React from "react";

const WellKnownPeople = ({ people }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {people.map((person, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px 0",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}
        >
          <img
            src={person.photo}
            alt={person.name}
            style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: "20px" }}
          />
          <div style={{ textAlign: "center" }}>
            <h3 style={{ margin: "0 0 5px 0" }}>{person.name}</h3>
            <p style={{ margin: 0 }}>{person.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WellKnownPeople;