import React from "react";
import "./PageStyles.css";

const About = () => (
  <div className="page">
    <h1>About Us</h1>
    <p>We are a passionate team of developers dedicated to building intuitive web experiences.</p>

    <div className="team-section">
      <div className="team-member">
        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Founder" />
        <h3>John Carter</h3>
        <p>Founder & CEO</p>
      </div>

      <div className="team-member">
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Lead Dev" />
        <h3>Sarah Lee</h3>
        <p>Lead Developer</p>
      </div>

      <div className="team-member">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Designer" />
        <h3>Michael Chen</h3>
        <p>UI/UX Designer</p>
      </div>
    </div>

    <h2>Our Mission</h2>
    <p>To deliver high-quality, reliable, and innovative web solutions that make life easier.</p>

    <h2>Our Values</h2>
    <ul>
      <li>Integrity</li>
      <li>Innovation</li>
      <li>Customer Satisfaction</li>
      <li>Continuous Learning</li>
    </ul>
  </div>
);

export default About;
