import React from 'react';
import './About.css';
import sunglassesImage from "../../utils/sun1.jpg"
import teamImage1 from "../../utils/meet1.jpg"; // Replace with your image path
import teamImage2 from '../../utils/meet2.jpg'; // Replace with your image path
import teamImage3 from '../../utils/meet3.jpg'; // Replace with your image path
import testimonialImage from '../../utils/pep.jpg'; // Replace with your image path

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      {/* Our Story Section */}
      <div className="about-grid">
        <div className="about-story">
          <h2 className="about-story-title">Our Story</h2>
          <p className="about-story-text">
            Welcome to our premium sunglasses store! We offer a curated selection of the finest eyewear to elevate your style and protect your vision. Our journey began with a passion for quality and a commitment to offering the best products to our customers.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src={sunglassesImage}
            alt="Sunglasses"
            className="about-image"
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="about-mission">
        <h2 className="about-mission-title">Our Mission</h2>
        <p className="about-mission-text">
          We believe in providing high-quality sunglasses that combine fashion and function. Our mission is to offer stylish, comfortable, and durable eyewear that meets the diverse needs of our customers. Whether you're looking for the latest trends or timeless classics, we've got you covered.
        </p>
        <button className="about-button">Explore Our Collection</button>
      </div>

      {/* Our Values Section */}
      <div className="about-values">
        <h2 className="about-values-title">Our Values</h2>
        <p className="about-values-text">
          At the core of our business are values that reflect our commitment to quality, customer satisfaction, and sustainability. We carefully select materials that are eco-friendly and ensure our products are crafted with the utmost precision.
        </p>
        <ul className="about-values-list">
          <li>Quality Craftsmanship</li>
          <li>Customer Satisfaction</li>
          <li>Sustainability</li>
          <li>Innovation</li>
        </ul>
      </div>

      {/* Meet the Team Section */}
      <div className="about-team">
        <h2 className="about-team-title">Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={teamImage1} alt="Team Member 1" className="team-image" />
            <h3 className="team-name">John Doe</h3>
            <p className="team-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={teamImage2} alt="Team Member 2" className="team-image" />
            <h3 className="team-name">Jane Smith</h3>
            <p className="team-role">Chief Designer</p>
          </div>
          <div className="team-member">
            <img src={teamImage3} alt="Team Member 3" className="team-image" />
            <h3 className="team-name">Emily Johnson</h3>
            <p className="team-role">Marketing Director</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="about-testimonials">
        <h2 className="about-testimonials-title">What Our Customers Say</h2>
        <div className="testimonial">
          <img src={testimonialImage} alt="Happy Customer" className="testimonial-image" />
          <blockquote className="testimonial-quote">
            "I absolutely love the sunglasses I bought from this store. They're stylish, comfortable, and the quality is unmatched!"
          </blockquote>
          <p className="testimonial-author">- Sarah Williams</p>
        </div>
      </div>
    </div>
  );
};

export default About;
