import React, { useEffect, useState } from "react";
import { Pagination, Box, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, showProduct } from "../../Redux/cartSlice";
import { Link } from "react-router-dom";
import SweetAlertComponent from "../../components/SweetAlert/SweetAlert";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ShowingProduct() {
  const dispatch = useDispatch();
  const { AllProduct, totalPages } = useSelector((state) => state.CrudKey);
  const [delete_id, setDelete_id] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [page, setPage] = useState(1);
  const [setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(showProduct({ page, perPage: 10 }));
  }, [dispatch, page]);

  const delete_func = () => {
    if (delete_id) {
      dispatch(deleteProduct(delete_id)).then(() => {
        dispatch(showProduct({ page, perPage: 10 }));
      });
    }
    setDelete_id("");
    setIsDelete(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: '#FAF3F3' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 6,
          width: '100%',
          maxWidth: 1200,
          px: 1,
        }}
      >
        {AllProduct?.map((item) => (
          <Card
            key={item._id}
            sx={{
              maxWidth: 345,
              m: 1,
              flex: '1 1 100%',
              '@media (min-width:360px)': {
                flex: '1 1 90%',
              },
              '@media (min-width:600px)': {
                flex: '1 1 45%',
              },
              '@media (min-width:900px)': {
                flex: '1 1 30%',
              },
              '@media (min-width:1200px)': {
                flex: '1 1 22%',
              },
              '@media (min-width:1800px)': {
                flex: '1 1 22%',
              },
              backgroundColor: '#FFF', // Light background for the card
              boxShadow: 3, // Subtle shadow for depth
              borderRadius: 2, // Rounded corners
            }}
          >
            <CardMedia
              component="img"
              height="220px"
              image={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h5" component="div" noWrap>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {item.description}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
              <IconButton component={Link} to={`/Edit/${item._id}`} color="primary">
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => {
                  setDelete_id(item._id);
                  setIsDelete(true);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Box>

      {isDelete && (
        <SweetAlertComponent
          confirm={delete_func}
          cancel={() => setIsDelete(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}

      <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
}

export default ShowingProduct;
