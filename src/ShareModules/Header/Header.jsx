import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLoggeduot, profile_details } from "../../Redux/authSlice";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Header.css"; // Import custom CSS file
import { profile_show } from "../../Helper/Helper";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f8f8', // Off-white color
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Slightly stronger shadow
          transition: 'background-color 0.3s ease', // Smooth background color transition
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#333', // Dark text color
          fontWeight: 600,
          borderRadius: '16px', // More rounded corners
          padding: '10px 20px', // Increased padding
          margin: '0 8px', // Margin between buttons
          border: '1px solid transparent', // Default border
          transition: 'all 0.3s ease', // Smooth transition
          '&:hover': {
            backgroundColor: '#e0e0e0', // Lighter background on hover
            color: '#000', // Darker text color on hover
            transform: 'translateY(-4px) scale(1.05)', // Elevate and scale up on hover
            borderColor: '#ccc', // Border color on hover
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow on hover
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '2px solid #ddd', // Border around avatar
          transition: 'border-color 0.3s ease', // Smooth border color transition
          '&:hover': {
            borderColor: '#aaa', // Darker border on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s ease, text-shadow 0.3s ease', // Smooth transition
          '&:hover': {
            color: '#555', // Darker text color on hover
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)', // More pronounced text shadow
          },
        },
      },
    },
  },
});

const pages = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Service", route: "/service" },
  { name: "Contact Us", route: "/contactus" },
  { name: "Add Products", route: "/product" },
];

const settings = [
  { name: "SignUp", route: "/signup" },
  { name: "SignIn", route: "/signin" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { isLoggedIn, Profile_Seen } = useSelector((state) => state.contents);
  const [is_loggedin, set_isloggedin] = useState("");

  const Name = localStorage.getItem("Firstname");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    set_isloggedin(Name);
  }, [Name]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Profile_pic
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(profile_details());
    }
  }, [isLoggedIn, dispatch]);

  // Logout
  const handleLogout = () => {
    dispatch(handleLoggeduot());
    navigate("/signin");
  };

  const handleClick = () => {
    navigate("/profilee");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#333", // Dark text color
                textDecoration: "none",
              }}
            >
              ShadeCraft
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: '#ff8c69' }} // Change the hamburger icon color here
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.route}
                    to={page.route}
                    component={Link}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: "5",
                color: "#333", // Dark text color
                textDecoration: "none",
              }}
            >
              ShadeCraft
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.route}
                  to={page.route}
                  component={Link}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Typography
              variant="h6"
              textAlign="center"
              sx={{ p: 1, color: 'rgba(255, 140, 105, 0.9)' }} // Peach light transparent color for profile name
            >
              {isLoggedIn ? is_loggedin : null}
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={is_loggedin}
                    src={isLoggedIn && Profile_Seen?.profile_pic  ? profile_show(Profile_Seen.profile_pic):""}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleClick}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                {is_loggedin ? (
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                ) : (
                  settings.map((setting) => (
                    <MenuItem
                      key={setting.route}
                      to={setting.route}
                      component={Link}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  ))
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
