import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid, Link } from "@mui/material";
import { signin } from "../../Redux/authSlice";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import the local background image
import backgroundImage from '../../utils/pr6.jpg'; // Update the path as necessary

// Define a custom theme with updated colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Teal for primary elements
    },
    secondary: {
      main: '#ffab00', // Yellow for secondary elements
    },
    background: {
      default: '#e0f2f1', // Light teal for the background
      paper: '#ffffff', // White for the Paper background
    },
    text: {
      primary: '#004d40', // Dark teal for text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Custom font family
    h4: {
      fontWeight: 'bold',
      fontSize: '2rem',
    },
  },
});

function Login() {
  useSelector((state) => state.contents);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(signin(data));
  };

  useEffect(() => {
    // Redirects the user if a valid token exists
    const redirectUser = () => {
      const token = localStorage.getItem("token");
      const isInLoginPage = window.location.pathname.toLowerCase() === "/signin";

      // If token exists and we're on the login page, redirect to home
      if (token && isInLoginPage) {
        navigate("/"); // Navigate to the home page or dashboard
      }
    };

    // Call redirectUser after component mounts
    redirectUser();
  }); // Dependency array ensures navigate function is up-to-date

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh', // Full viewport height
          width: '100%', // Full viewport width
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${backgroundImage})`, // Local background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: 0, // Remove default padding
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 400,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white
            padding: 4,
            borderRadius: 2,
            boxShadow: theme.shadows[5], // Enhanced shadow
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
            sx={{
              mb: 3,
              color: theme.palette.text.primary, // Dark teal color
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '0.5px',
              fontFamily: theme.typography.fontFamily // Apply custom font
            }}
          >
            Login Form
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              width: '100%'
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  {...register("email", { required: "Please enter your email" })}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : "Enter your email"}
                  sx={{
                    mb: 2,
                    '& input': {
                      fontSize: '1rem',
                      color: theme.palette.text.primary, // Dark teal text
                      fontFamily: theme.typography.fontFamily // Apply custom font
                    },
                    '& label': {
                      fontSize: '0.875rem',
                      color: theme.palette.text.primary, // Dark teal label color
                      fontFamily: theme.typography.fontFamily // Apply custom font
                    },
                    '& fieldset': {
                      borderColor: theme.palette.text.primary, // Dark teal border
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                  sx={{
                    mb: 2,
                    '& input': {
                      fontSize: '1rem',
                      color: theme.palette.text.primary, // Dark teal text
                      fontFamily: theme.typography.fontFamily // Apply custom font
                    },
                    '& label': {
                      fontSize: '0.875rem',
                      color: theme.palette.text.primary, // Dark teal label color
                      fontFamily: theme.typography.fontFamily // Apply custom font
                    },
                    '& fieldset': {
                      borderColor: theme.palette.text.primary, // Dark teal border
                    }
                  }}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: 3,
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  padding: '10px 20px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  backgroundColor: theme.palette.primary.main, // Teal button color
                  color: '#FFFFFF', // White text color on button
                  '&:hover': {
                    backgroundColor: '#004d40', // Darker teal for hover
                  },
                  fontFamily: theme.typography.fontFamily // Apply custom font
                }}
              >
                Login
              </Button>
              <Typography
                variant="body2"
                align="center"
                sx={{
                  mt: 2,
                  fontFamily: theme.typography.fontFamily // Apply custom font
                }}
              >
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  underline="hover"
                  sx={{
                    color: theme.palette.secondary.main, // Yellow link color
                    fontWeight: 'bold',
                    '&:hover': {
                      color: '#ff6f00', // Darker yellow on hover
                    },
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
