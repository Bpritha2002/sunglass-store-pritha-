import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); 

  const handleViewDetails = (model) => {
    console.log(`Navigating to /about/${model}`);
    navigate(`/about/${model}`);
  };

  return (
    <Box className="home">
      {/* Static Header Image */}
      <Box className="hero-image-container">
        <img src={require('../../utils/head1.jpg')} alt="Hero Image" className="hero-image" />
        <Box className="hero-description">
          <h1>FEEL THE BEAT!</h1>
          <p>Your one-stop shop for the latest sunglasses trends.</p>
        </Box>
      </Box>
      
      <Container>
        <h1 className="title">
          Welcome to Our Store!
        </h1>
        <p className="description">
          Discover the latest trends and timeless styles in our exclusive sunglasses collection. Shop now and elevate your wardrobe!
        </p>
      </Container>
      
      {/* CTA Buttons */}
      <Box className="cta-button-container">
        <button className="cta-button" onClick={() => navigate('/category/men')}>
          <img src={require('../../utils/man.jpg')} alt="Men" />
          Shop Men
        </button>
        <button className="cta-button" onClick={() => navigate('/category/women')}>
          <img src={require('../../utils/womenglass.jpg')} alt="Women" />
          Shop Women
        </button>
        <button className="cta-button" onClick={() => navigate('/category/kids')}>
          <img src={require('../../utils/childrenglass.jpg')} alt="Kids" />
          Shop Kids
        </button>
      </Box>

      {/* New Arrivals Section */}
      <Container className="new-arrivals-section">
        <h2 className="new-arrivals-title">
          New Arrivals
        </h2>
        <p className="new-arrivals-description">
          Discover the latest additions to our collection with exclusive styles and designs.
        </p>
        <Box className="new-arrival-grid">
          {/* Repeat for each new arrival */}
          {['model1', 'model2', 'model3', 'model4'].map((model, index) => (
            <Box className="new-arrival-item" key={model}>
              <div className="new-arrival-overlay">
                <h6 className="new-arrival-title">
                  Sunglass Model {index + 1}
                </h6>
                <h6 className="new-arrival-price">
                  ₹{[1999, 2499, 1799, 1799][index]}
                </h6>
                <button className="view-details-button" onClick={() => handleViewDetails(model)}>
                  View Details
                </button>
              </div>
              <img src={require(`../../utils/new${index + 1}.jpg`)} alt={`New Arrival ${index + 1}`} className="new-arrival-image" />
            </Box>
          ))}
        </Box>
      </Container>

      {/* Featured Collections Section */}
      <Container className="featured-collections-section">
        <h2 className="featured-collections-title">Featured Collections</h2>
        <p className="featured-collections-description">
          Explore our handpicked collections that set the trends for the season.
        </p>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="collection-item">
              <img src={require('../../utils/pr1.jpg')} alt="Collection 1" className="collection-image" />
              <Typography variant="h6" className="collection-title">Classic Elegance</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="collection-item">
              <img src={require('../../utils/pr2.jpg')} alt="Collection 2" className="collection-image" />
              <Typography variant="h6" className="collection-title">Modern Style</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="collection-item">
              <img src={require('../../utils/retro.jpg')} alt="Collection 3" className="collection-image" />
              <Typography variant="h6" className="collection-title">Retro Vibes</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container className="testimonials-section">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="testimonial-item">
              <Typography variant="body1">"These sunglasses are amazing! Perfect fit and style!"</Typography>
              <Typography variant="subtitle1" className="customer-name">- John Doe</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="testimonial-item">
              <Typography variant="body1">"Absolutely love my new shades. Great quality!"</Typography>
              <Typography variant="subtitle1" className="customer-name">- Jane Smith</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="testimonial-item">
              <Typography variant="body1">"Stylish and comfortable. I'm getting compliments every day!"</Typography>
              <Typography variant="subtitle1" className="customer-name">- Alex Johnson</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Newsletter Signup Section */}
      <Container className="newsletter-section">
        <h2 className="newsletter-title">Stay Updated!</h2>
        <p className="newsletter-description">Sign up for our newsletter to receive the latest news and exclusive offers.</p>
        <Box className="newsletter-signup">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="newsletter-buttonn">Sign Up</button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
