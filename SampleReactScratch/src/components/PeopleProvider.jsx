import React, { useState } from "react";

const scientists = [
  { name: "Albert Einstein", profession: "Physicist", photo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg" },
  { name: "Marie Curie", profession: "Physicist", photo: "https://cosmoscience.in/wp-content/uploads/2025/01/Marie-Curie.jpg" },
  { name: "Isaac Newton", profession: "Physicist", photo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Sir_Isaac_Newton_%281642-1727%29.jpg" },
  { name: "Ada Lovelace", profession: "Mathematician", photo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg" },
  { name: "Carl Friedrich Gauss", profession: "Mathematician", photo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Carl_Friedrich_Gauss.jpg" },
  { name: "Euclid", profession: "Mathematician", photo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Euclid.jpg" },
  { name: "Dmitri Mendeleev", profession: "Chemist", photo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dmitri_Mendeleev_1897.jpg" },
  { name: "Linus Pauling", profession: "Chemist", photo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Linus_Pauling_1931.jpg" },
  { name: "Rosalind Franklin", profession: "Chemist", photo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Rosalind_Franklin.jpg" },
  { name: "Stephen Hawking", profession: "Physicist", photo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg" },
];

const PeopleProvider = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredScientists = scientists.filter((scientist) =>
    scientist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedScientists = filteredScientists.reduce((groups, scientist) => {
    if (!groups[scientist.profession]) {
      groups[scientist.profession] = [];
    }
    groups[scientist.profession].push(scientist);
    return groups;
  }, {});

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <h1>Famous Scientists</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "80%", borderRadius: "8px", border: "1px solid #ccc" }}
      />
      {Object.entries(groupedScientists).map(([profession, group]) => (
        <div key={profession} style={{ width: "80%", marginBottom: "20px" }}>
          <div style={{ position: "relative", marginBottom: "10px" }}>
            <h2>{profession}s</h2>
            <div style={{ position: "absolute", top: "0", left: "0", backgroundColor: "white", color: "black", padding: "5px 10px", borderRadius: "5px" }}>
              No of {profession}s: {group.length}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {group.map((scientist, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={scientist.photo}
                  alt={scientist.name}
                  style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: "20px" }}
                />
                <div style={{ textAlign: "left" }}>
                  <h3 style={{ margin: "0 0 5px 0" }}>{scientist.name}</h3>
                  <p style={{ margin: 0 }}>{scientist.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleProvider;