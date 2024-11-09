import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Grid, Input, Box } from "@mui/material";
import { product } from "../../Redux/cartSlice";

// Import the background image
import backgroundImage from '../../utils/pr3.jpg'; // Adjust the path as necessary

function AddProduct() {
  useSelector((state) => state.CrudKey);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", image);

    dispatch(product(formData)).then(() => {
      navigate("/showProduct");
    });
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{ 
          p: 2,
          borderRadius: 2, // Slightly increased border radius
          boxShadow: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light transparent peach background
          border: '1px solid rgba(245, 183, 177, 0.7)', // Light peach border with transparency
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          marginBottom: 4,
          position: 'relative',
          zIndex: 1,
          maxWidth: '400px',
          width: '80%',
          height: 'auto',
        }}
      >
        <Typography 
          variant="h5"
          gutterBottom 
          align="center" 
          sx={{ 
            mt: 1,
            color: '#FF6F61',
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: 1,
            fontFamily: '"Georgia", serif',
          }}
        >
          Add Product
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleSubmit(onSubmit)} 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                margin="normal"
                {...register("title", { required: "Title is required" })}
                error={!!errors.title}
                helperText={errors.title ? errors.title.message : ""}
                sx={{ 
                  mb: 1,
                  borderRadius: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(245, 183, 177, 0.7)', // Light peach border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#F29C11',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FF6F61',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#FF6F61',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                margin="normal"
                multiline
                rows={2}
                {...register("description", { required: "Description is required" })}
                error={!!errors.description}
                helperText={errors.description ? errors.description.message : ""}
                sx={{ 
                  mb: 1,
                  borderRadius: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(245, 183, 177, 0.7)', // Light peach border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#F29C11',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FF6F61',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#FF6F61',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                fullWidth
                sx={{ 
                  mb: 1,
                  border: '1px dashed rgba(245, 183, 177, 0.7)', // Light peach dashed border
                  borderRadius: 1,
                  p: 0.5,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              />
              {errors.image && (
                <Typography color="error" variant="body2" sx={{ mb: 1 }}>
                  {errors.image.message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                type="submit" 
                fullWidth 
                sx={{ 
                  mt: 1,
                  py: 1,
                  fontWeight: 'bold', 
                  borderRadius: 1,
                  backgroundColor: '#FF6F61',
                  '&:hover': {
                    backgroundColor: '#F29C11',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AddProduct;
