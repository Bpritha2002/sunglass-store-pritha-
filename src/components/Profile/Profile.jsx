import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profile_details } from '../../Redux/authSlice';
import { Container, Typography, Card, CardContent, TextField, Grid, Box, Divider } from '@mui/material';
import { grey, blueGrey } from '@mui/material/colors';
import { profile_show } from '../../Helper/Helper';

const Profilee = () => {
  const dispatch = useDispatch();
  const { Profile_Seen } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(profile_details());
  }, [dispatch]);

  const profilePicUrl = profile_show(Profile_Seen.profile_pic);

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 4,
        padding: { xs: 2, sm: 4 },
        backgroundColor: grey[200],
        borderRadius: 3,
        marginBottom: 6,  // Add margin bottom for spacing
      }}
    >
      <Card
        variant="outlined"
        sx={{
          borderRadius: 5,
          boxShadow: 8,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          overflow: 'hidden',
          marginBottom: 4,
          padding: { xs: 2, md: 3 },  // Add padding to Card
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '35%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: blueGrey[100],
            borderRight: { md: `2px solid ${grey[400]}` },
            padding: 3,
            marginBottom: { xs: 3, md: 0 },  // Margin for spacing on small screens
          }}
        >
          {Profile_Seen.profile_pic && (
            <img
              src={profilePicUrl}
              alt="Profile"
              width="170"
              height="150"
              style={{
                borderRadius: '50%',
                border: `4px solid ${grey[400]}`,
                margin: '10px',
              }}
            />
          )}
        </Box>
        <CardContent
          sx={{
            width: { xs: '100%', md: '65%' },
            padding: { xs: 2, sm: 4, md: 5 },
            marginBottom: { xs: 3, md: 0 },  // Adjust margin for small screens
          }}
        >
          <Typography
            variant="h4"
            component="div"
            textAlign={{ xs: 'center', md: 'left' }}
            sx={{
              fontWeight: 'bold',
              color: blueGrey[800],
              marginBottom: 2,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
            }}
          >
            {Profile_Seen?.first_name} {Profile_Seen?.last_name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={{ xs: 'center', md: 'left' }}
            marginBottom={3}
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
          >
            {Profile_Seen?.email}
          </Typography>
          <Divider sx={{ marginY: 3 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                value={Profile_Seen?.first_name || ''}
                InputProps={{ readOnly: true }}
                sx={{
                  marginBottom: 3,
                  backgroundColor: grey[50],
                  borderRadius: 3,
                  margin: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                value={Profile_Seen?.last_name || ''}
                InputProps={{ readOnly: true }}
                sx={{
                  marginBottom: 3,
                  backgroundColor: grey[50],
                  borderRadius: 3,
                  margin: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                value={Profile_Seen?.email || ''}
                InputProps={{ readOnly: true }}
                sx={{
                  backgroundColor: grey[50],
                  borderRadius: 3,
                  margin: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profilee;
