import React from 'react';
import './Service.css'; // Import your custom CSS

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">Our Distinguished Services</h1>
      
      <div className="service-cards">
        <div className="service-card">
          <div className="service-icon">🔍</div> {/* Add appropriate icon */}
          <h2>Professional Lens Polishing</h2>
          <p>Our expert technicians provide meticulous lens polishing services, ensuring your sunglasses remain crystal clear and free from scratches.</p>
          <p className="service-price">Price: ₹500</p> {/* Add pricing if applicable */}
        </div>

        <div className="service-card">
          <div className="service-icon">🔧</div> {/* Add appropriate icon */}
          <h2>Comprehensive Frame Repair</h2>
          <p>We offer specialized repair services for damaged frames, restoring them to their original condition with precision and care.</p>
          <p className="service-price">Price: ₹700</p> {/* Add pricing if applicable */}
        </div>

        <div className="service-card">
          <div className="service-icon">👓</div> {/* Add appropriate icon */}
          <h2>Custom Fitting Services</h2>
          <p>Our personalized fitting service guarantees maximum comfort and an impeccable fit tailored to your individual preferences.</p>
          <p className="service-price">Price: ₹300</p> {/* Add pricing if applicable */}
        </div>

        <div className="service-card">
          <div className="service-icon">🏠</div> {/* Add appropriate icon */}
          <h2>Home Delivery</h2>
          <p>Benefit from our convenient home delivery service, ensuring your sunglasses are delivered directly to your door with the utmost care.</p>
          <p className="service-price">Price: ₹150</p> {/* Add pricing if applicable */}
        </div>

        <div className="service-card">
          <div className="service-icon">🎨</div> {/* Add appropriate icon */}
          <h2>Style Consultation</h2>
          <p>Receive expert guidance on selecting the perfect sunglasses that complement your unique facial structure and style.</p>
          <p className="service-price">Price: ₹600</p> {/* Add pricing if applicable */}
        </div>

        <div className="service-card">
          <div className="service-icon">💻</div> {/* Add appropriate icon */}
          <h2>Virtual Try-On Experience</h2>
          <p>Explore our innovative virtual try-on service, allowing you to visualize your new sunglasses from the comfort of your home.</p>
          <p className="service-price">Free</p> {/* Add pricing if applicable */}
        </div>
      </div>

      <div className="service-highlight">
        <h2>Why Choose Our Services?</h2>
        <p>We pride ourselves on delivering unparalleled quality, convenience, and style. Experience the difference with our distinguished services today.</p>
        {/* <button className="cta-button">Book a Service</button>  */}
      </div>

      <div className="service-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"The lens polishing service was fantastic! My sunglasses look brand new."</p>
          <p><strong>— Jane Doe</strong></p>
        </div>
        <div className="testimonial">
          <p>"Great frame repair service. My sunglasses are as good as new."</p>
          <p><strong>— John Smith</strong></p>
        </div>
        {/* Add more testimonials as needed */}
      </div>

      <div className="service-faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is included in the lens polishing service?</h3>
          <p>Our lens polishing service includes thorough cleaning and polishing to remove scratches and restore clarity.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer any discounts for multiple services?</h3>
          <p>Yes, we offer discounts for customers who book multiple services. Please contact us for more details.</p>
        </div>
        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
};

export default Service;
