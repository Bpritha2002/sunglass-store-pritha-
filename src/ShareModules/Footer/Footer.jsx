import React from 'react';
import { Container, Box, Typography, Button, TextField, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ 
        bgcolor: 'linear-gradient(to right, #f8f9fa, #e0e0e0)', 
        py: 8, 
        color: '#333',
        borderTop: '4px solid #ccc', 
        boxShadow: '0px -5px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={5}>
            {/* About Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.4rem' },
                  mb: 3,
                  fontWeight: 'bold',
                  color: '#222',
                  textDecoration: 'underline',
                  letterSpacing: '0.05rem',
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#555',
                  lineHeight: 1.8,
                }}
              >
                We are dedicated to providing the best shopping experience with the latest trends and timeless styles. Join our community for exclusive updates.
              </Typography>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.4rem' },
                  mb: 3,
                  fontWeight: 'bold',
                  color: '#222',
                  textDecoration: 'underline',
                  letterSpacing: '0.05rem',
                }}
              >
                Contact
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#555',
                  lineHeight: 1.8,
                }}
              >
                Phone: (123) 456-7890
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#555',
                  lineHeight: 1.8,
                }}
              >
                Email: contact@ourstore.com
              </Typography>
            </Grid>

            {/* Newsletter Signup */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.4rem' },
                  mb: 3,
                  fontWeight: 'bold',
                  color: '#222',
                  textDecoration: 'underline',
                  letterSpacing: '0.05rem',
                }}
              >
                Newsletter
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#555',
                  lineHeight: 1.8,
                }}
              >
                Subscribe to our newsletter for the latest updates and special offers.
              </Typography>
              <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center" mt={3}>
                <TextField
                  variant="outlined"
                  placeholder="Your email address"
                  size="small"
                  sx={{
                    mb: { xs: 2, sm: 0 },
                    mr: { sm: 1 },
                    width: { xs: '100%', sm: 'auto' },
                    bgcolor: '#fff',
                    borderRadius: '12px',
                    border: '1px solid #ccc',
                    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  href="/registration"
                  sx={{
                    bgcolor: '#222',
                    color: '#fff',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    borderRadius: '12px',
                    textTransform: 'none',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      bgcolor: '#444',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <Box mt={6} display="flex" justifyContent="center">
            <IconButton
              sx={{
                color: '#fff',
                bgcolor: '#3b5998',
                mx: 2,
                '&:hover': {
                  bgcolor: '#2a477a',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease',
                },
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: '#fff',
                bgcolor: '#1DA1F2',
                mx: 2,
                '&:hover': {
                  bgcolor: '#0d94e8',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease',
                },
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{
                color: '#fff',
                bgcolor: '#E4405F',
                mx: 2,
                '&:hover': {
                  bgcolor: '#d73556',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease',
                },
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Instagram />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <Box mt={6} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="center">
            <Button
              href="/"
              sx={{
                mb: { xs: 2, sm: 0 },
                mr: { sm: 3 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#333',
                '&:hover': {
                  color: '#111',
                  transform: 'translateY(-3px)',
                  transition: 'transform 0.2s ease',
                },
              }}
            >
              Home
            </Button>
            <Button
              href="/about"
              sx={{
                mb: { xs: 2, sm: 0 },
                mr: { sm: 3 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#333',
                '&:hover': {
                  color: '#111',
                  transform: 'translateY(-3px)',
                  transition: 'transform 0.2s ease',
                },
              }}
            >
              About Us
            </Button>
            <Button
              href="/service"
              sx={{
                mb: { xs: 2, sm: 0 },
                mr: { sm: 3 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#333',
                '&:hover': {
                  color: '#111',
                  transform: 'translateY(-3px)',
                  transition: 'transform 0.2s ease',
                },
              }}
            >
              Services
            </Button>
            <Button
              href="/contact"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#333',
                '&:hover': {
                  color: '#111',
                  transform: 'translateY(-3px)',
                  transition: 'transform 0.2s ease',
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
