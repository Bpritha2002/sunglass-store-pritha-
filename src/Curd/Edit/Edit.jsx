import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editList, UpdateProduct } from "../../Redux/cartSlice";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import backgroundImage from '../../utils/pr4.jpg';

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    dispatch(editList(id));
  }, [id, dispatch]);

  const { researchDetailsData } = useSelector((state) => state.CrudKey);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (researchDetailsData) {
      setValue("title", researchDetailsData.title);
      setValue("description", researchDetailsData.description);
      if (researchDetailsData.image) {
        setImagePreview(
          `https://wtsacademy.dedicateddevelopers.us/uploads/product/${researchDetailsData.image}`
        );
      }
    }
  }, [researchDetailsData, setValue]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    formData.append("id", id);

    dispatch(UpdateProduct(formData)).then(() => {
      alert("Edit successful");
      navigate("/showProduct");
    });
  };

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: "10px", sm: "20px" }, // Responsive padding
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "500px" }, // Responsive width
          padding: { xs: "20px", md: "30px" }, // Responsive padding
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "12px",
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
          border: "2px solid #fcb69f",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontFamily: "Georgia, serif",
            color: "#ff6f61",
            fontSize: { xs: "1.8rem", md: "2.5rem" }, // Responsive font size
          }}
        >
          Edit Product
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                {...register("title", { required: "Title is required" })}
                error={!!errors.title}
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ff6f61",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff6f61",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff6f61",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "black",
                    "&.Mui-focused": {
                      color: "#ff6f61",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                {...register("description", {
                  required: "Description is required",
                })}
                error={!!errors.description}
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ff6f61",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff6f61",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff6f61",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "black",
                    "&.Mui-focused": {
                      color: "#ff6f61",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {imagePreview && (
                  <Box
                    component="img"
                    src={imagePreview}
                    alt="Current Preview"
                    sx={{
                      width: "130px",
                      height: "130px",
                      borderRadius: "50%",
                      border: "3px solid #fff",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s ease-in-out",
                      transform: "scale(1.05)",
                      marginBottom: "20px",
                    }}
                  />
                )}
              </Box>

              <TextField
                fullWidth
                type="file"
                variant="outlined"
                accept="image/*"
                {...register("image")}
                error={!!errors.image}
                helperText={errors.image?.message}
                onChange={handleImageChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ff6f61",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff6f61",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff6f61",
                    },
                    backgroundColor: "transparent",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                sx={{
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  mt: 2,
                  borderRadius: "50px",
                  color: "white",
                  backgroundColor: "#ff6f61",
                  padding: { xs: "8px 0", sm: "10px 0" }, // Responsive padding
                  fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#ff6f61",
                    backgroundColor: "white",
                    border: "2px solid #ff6f61",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default EditProduct;
