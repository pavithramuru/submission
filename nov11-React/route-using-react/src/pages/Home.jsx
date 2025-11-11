import React from "react";
import "./PageStyles.css";

const Home = () => (
  <div className="page">
    <h1>Welcome to MyWebsite</h1>
    <p>Discover amazing content, services, and resources tailored just for you.</p>
    <div className="features">
      <div className="feature">
        <h3>Informative Content</h3>
        <p>Explore articles, tutorials, and guides on various topics.</p>
      </div>
      <div className="feature">
        <h3>Responsive Design</h3>
        <p>Accessible and beautiful layout on any device.</p>
      </div>
      <div className="feature">
        <h3>Regular Updates</h3>
        <p>Stay up to date with our latest features and content.</p>
      </div>
    </div>
  </div>
);

export default Home;
