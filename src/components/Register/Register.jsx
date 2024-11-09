import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import { TextField, Box, Button, Typography, Container, Grid, Paper, Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { signup } from "../../Redux/authSlice";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Register.css"

// Import the local background image
import backgroundImage from '../../utils/pr5.jpg'; // Update the path as necessary

// Define a custom theme with updated colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Custom teal for the button
    },
    background: {
      paper: '#e0f2f1', // Updated background color for Paper (light teal)
    },
    text: {
      primary: '#004d40', // Darker teal for text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Change font family for the entire theme
  },
});

function Registration() {
  const { redirectLogin } = useSelector((state) => state.contents);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profilePic, setProfilePic] = useState(null);
  const [imgName, setImgName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profile_pic", profilePic);

    dispatch(signup(formData));
    navigate("/signin");
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setImgName(file.name);
    }
  };

  const RedirectUser = () => {
    let name = localStorage.getItem("first_name");
    let isRegisterPage = window.location.pathname.toLowerCase() === "/signup";

    if (name !== null && name !== undefined && name !== "") {
      isRegisterPage && navigate("/signin");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [RedirectUser]);

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
        }}
      >
        <Container maxWidth="xs">
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              mt: 5, 
              mb: 5 
            }}
          >
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 4, 
                borderRadius: 2, 
                width: "100%", // Increased width for the form
                height: 500, // Fixed height for the form
                backgroundColor: 'rgba(224, 242, 241, 0.8)', // More transparent background color
                color: theme.palette.text.primary, // Darker teal text color
                overflow: 'auto', // Scroll if content overflows
                boxShadow: `0px 4px 8px rgba(0,0,0,0.2)`, // Light shadow
              }}
            >
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom 
                align="center"
                sx={{ 
                  mb: 3, 
                  color: theme.palette.text.primary, // Darker teal color
                  fontWeight: 'bold', 
                  fontSize: '2rem', 
                  letterSpacing: '0.5px',
                }}
              >
                Signup Form
              </Typography>
              <Box 
                component="form" 
                onSubmit={handleSubmit(onSubmit)} 
                sx={{ 
                  width: '100%' 
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    textAlign: "center",
                    position: "relative",
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: 2,
                    p: 3,
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    accept="image/*"
                    type="file"
                    id="image"
                    name="img"
                    onChange={handleProfilePicChange}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="image">
                    <Button
                      variant="outlined"
                      component="span"
                      sx={{
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        "&:hover": {
                          borderColor: "#004d40", // Darker teal for hover
                          color: "#004d40", // Darker teal text color
                          backgroundColor: "#e0f2f1", // Light teal background for hover
                        },
                      }}
                    >
                      <CameraAltIcon sx={{ mr: 1 }} />
                      Upload Profile Picture
                    </Button>
                  </label>
                  {profilePic && (
                    <Avatar
                      src={URL.createObjectURL(profilePic)}
                      alt="Profile Pic"
                      sx={{
                        width: 120,
                        height: 120,
                        border: `5px solid ${theme.palette.primary.main}`,
                        boxShadow: `0px 4px 8px ${theme.palette.primary.main}`,
                        mt: 2,
                      }}
                    />
                  )}
                  {imgName && (
                    <Typography variant="body2" color="textSecondary">
                      {imgName}
                    </Typography>
                  )}
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="First Name"
                      {...register("first_name", { required: "First name is required" })}
                      error={!!errors.first_name}
                      helperText={errors.first_name?.message}
                      sx={{ 
                        mb: 2, 
                        '& input': {
                          fontSize: '1rem',
                          color: theme.palette.text.primary, // Darker teal text
                          fontFamily: theme.typography.fontFamily // Apply custom font
                        },
                        '& label': {
                          fontSize: '0.875rem',
                          color: theme.palette.text.primary, // Darker teal label color
                          fontFamily: theme.typography.fontFamily // Apply custom font
                        },
                        '& fieldset': {
                          borderColor: theme.palette.text.primary, // Darker teal border
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      {...register("last_name", { required: "Last name is required" })}
                      error={!!errors.last_name}
                      helperText={errors.last_name?.message}
                      sx={{ 
                        mb: 2, 
                        '& input': {
                          fontSize: '1rem',
                          color: theme.palette.text.primary, // Darker teal text
                          fontFamily: theme.typography.fontFamily // Apply custom font
                        },
                        '& label': {
                          fontSize: '0.875rem',
                          color: theme.palette.text.primary, // Darker teal label color
                          fontFamily: theme.typography.fontFamily // Apply custom font
                        },
                        '& fieldset': {
                          borderColor: theme.palette.text.primary, // Darker teal border
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={{ 
                        mb: 2, 
                        '& input': {
                          fontSize: '1rem',
                          color: theme.palette.text.primary, // Darker teal text
                          fontFamily: theme.typography.fontFamily // Apply custom font
                        },
                        '& label': {
                          fontSize: '0.875rem',
                          color: theme.palette.text.primary, // Darker teal label color
                          fontFamily: theme.typography.fontFamily // Apply custom font
                        },
                        '& fieldset': {
                          borderColor: theme.palette.text.primary, // Darker teal border
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      {...register("password", { required: "Password is required" })}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      sx={{ 
                        mb: 2, 
                        '& input': {
                          fontSize: '1rem',
                          color: theme.palette.text.primary, // Darker teal text
                          fontFamily: theme.typography.fontFamily // Apply custom font
                        },
                        '& label': {
                          fontSize: '0.875rem',
                          color: theme.palette.text.primary, // Darker teal label color
                          fontFamily: theme.typography.fontFamily // Apply custom font
                        },
                        '& fieldset': {
                          borderColor: theme.palette.text.primary, // Darker teal border
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{
                        mb: 2,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#fff', // White text color
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          boxShadow: `0px 4px 8px ${theme.palette.primary.main}`,
                        },
                      }}
                    >
                      Signup
                    </Button>
                    <Typography variant="body2" align="center">
                      Already have an account?{" "}
                      <Link to="/signin" style={{ color: theme.palette.primary.main }}>
                        Sign in
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Registration;
