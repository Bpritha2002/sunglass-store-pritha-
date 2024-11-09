import React from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  
} from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const StyledContainer = styled(Container)({
  marginTop: '2px',
  padding: '40px',
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.15)',
  maxWidth: '800px',
});

const GradientButton = styled(Button)({
  background: 'linear-gradient(45deg, #ff6f61, #ff5a4d)',
  color: '#fff',
  marginTop: '20px',
  fontWeight: 'bold',
  padding: '12px',
  borderRadius: '8px',
  '&:hover': {
    background: 'linear-gradient(45deg, #ff5a4d, #ff3f3f)',
  },
});

const StyledPaper = styled(Paper)({
  padding: '30px',
  borderRadius: '15px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
});

const StyledTypography = styled(Typography)({
  color: '#555',
});

const ContactUs = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', padding: '70px 0' }}>
      <StyledContainer>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#ff6f61', fontWeight: 'bold' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ color: '#777' }}>
          We would love to hear from you! Please fill out the form below and we will get in touch with you as soon as possible.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <form noValidate autoComplete="off">
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  required
                  sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <GradientButton variant="contained" size="large" fullWidth>
                  Send Message
                </GradientButton>
              </form>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ marginRight: '8px', color: '#ff6f61' }} /> Our Store
              </Typography>
              <StyledTypography variant="body1" paragraph>
                12/4 Park Street Avenue
              </StyledTypography>
              <StyledTypography variant="body1" paragraph>
                Sun City, SC 12345
              </StyledTypography>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ marginRight: '8px', color: '#ff6f61' }} /> Phone
              </Typography>
              <StyledTypography variant="body1" paragraph>
                (123) 456-7890
              </StyledTypography>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ marginRight: '8px', color: '#ff6f61' }} /> Email
              </Typography>
              <StyledTypography variant="body1" paragraph>
                contact@shadecraft12.com
              </StyledTypography>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ marginRight: '8px', color: '#ff6f61' }} /> Business Hours
              </Typography>
              <StyledTypography variant="body1" paragraph>
                Mon - Fri, 9:00 AM - 6:00 PM
              </StyledTypography>
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default ContactUs;
