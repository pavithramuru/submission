import React from "react";
import "./PageStyles.css";

const Home = () => (
  <div className="page">
    <h1>Welcome to Our Web App</h1>
    <p>Empowering your digital experience through clean design and smart solutions.</p>

    <div className="features">
      <div className="feature">
        <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Innovation" />
        <h3>Innovation</h3>
        <p>We bring fresh ideas to every project, blending creativity with technology.</p>
      </div>

      <div className="feature">
        <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Quality" />
        <h3>Quality</h3>
        <p>Our focus is on delivering reliable, high-performing web applications.</p>
      </div>

      <div className="feature">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Support" />
        <h3>Support</h3>
        <p>We provide continuous guidance and assistance throughout your journey.</p>
      </div>
    </div>
  </div>
);

export default Home;
