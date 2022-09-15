import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { useTheme } from "@emotion/react";
import { DarkTheme } from "../../theme/Theme";
import Review_card from "../../components/utilityComp/Review_Card/Review_card";

const ProductDetailPage = () => {
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const disc = Math.floor(Math.random() * 30 + 10);
  const discountedPrice =
    product.price - Math.floor(product.price * (disc / 100));

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: " 30px 15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "91vh",
        }}
      >
        {discountedPrice ? (
          <>
            <Box sx={{ padding: "0 49px", width: "100%" }}>
              <Carousel
                swipe
                height={500}
                animation={"slide"}
                interval={4000}
                stopAutoPlayOnHover
              >
                {product.images &&
                  product.images.map((item, i) => {
                    return (
                      <img
                        style={{ borderRadius: "5px" }}
                        key={i}
                        src={item.url}
                        alt={`${i} pic`}
                        height={"100%"}
                        width={"100%"}
                      />
                    );
                  })}
              </Carousel>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "10px 20px",
                gap: "15px",
              }}
            >
              <Typography variant="h5" fontWeight={"bold"} textAlign={"left"}>
                {product.name}
              </Typography>
              <Box
                sx={{
                  borderBottom: "1px solid grey",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  padding: "0 0 15px 0px",
                  gap: "10px",
                }}
              >
                <Rating
                  sx={{ alignSelf: "left" }}
                  precision={0.5}
                  readOnly
                  value={product.ratings}
                  size="small"
                  name="simple-controlled"
                />
                <Typography>Reviews:{product.numofReviews}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    background: "#ff517b",
                    padding: "3px 20px 3px 20px",
                    borderRadius: "10px",
                    color: "white",
                  }}
                  letterSpacing="1px"
                  fontWeight={"bold"}
                >
                  Price
                </Typography>
                <Typography variant="h6" fontWeight={"bolder"}>
                  ₹ {discountedPrice}
                </Typography>
                <Typography
                  ml={2}
                  sx={{ textDecoration: "line-through", fontSize: "17px" }}
                >
                  ₹ {product.price}
                </Typography>
                <Typography fontSize={20} color="#ff905a">
                  ({disc}% OFF)
                </Typography>
              </Box>
              <Typography variant="body2" fontWeight={"bold"} color="#03a685">
                Inclusive Of All Taxes
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography>Qty : </Typography>
                <Button
                  onClick={() => {
                    setCount(count - 1);
                  }}
                  disabled={count <= 1}
                  sx={{
                    background: "#FFF",
                    fontSize: "20px",
                    padding: "0",
                    color: "black",
                    "&:hover": {
                      background: "#FFF",
                      color: "black",
                    },
                  }}
                  variant="contained"
                >
                  -
                </Button>
                <Typography> {count}</Typography>
                <Button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  sx={{
                    background: "#FFF",
                    padding: "0",
                    fontSize: "20px",
                    color: "black",
                    "&:hover": {
                      background: "#FFF",
                      color: "black",
                    },
                  }}
                  variant="contained"
                >
                  +
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  margin: "20px 0",
                }}
              >
                <Button
                  sx={{
                    background: "#ff3e6c",
                    width: "20%",
                    "&:hover": {
                      background: "#ff3e6c",
                      color: "white",
                    },
                  }}
                  variant="contained"
                >
                  ADD To Cart
                </Button>
                |
                <Button
                  sx={{
                    width: "20%",
                    background: "#03a685",
                    color: "white",
                    "&:hover": {
                      background: "#03a685",
                      color: "white",
                    },
                  }}
                  variant="contained"
                >
                  BUY NOW
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontWeight="bolder"
                  fontSize={20}
                  sx={{ borderBottom: "1px solid black", width: "100%" }}
                >
                  Product Details
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 0",
                    linHeight: "3px",
                    letterSpacing: ".5px",
                  }}
                >
                  {product.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  fontWeight="bolder"
                  fontSize={20}
                  sx={{
                    borderBottom: "1px solid black",
                    width: "100%",
                  }}
                >
                  Customer Reviews
                </Typography>
                {product.reviews && product.reviews[0] ? (
                  <Box
                    sx={{
                      display: "flex",
                      width: "93vw",
                      gap: "20px",
                      overflow: "auto",
                      padding: "20px 0",
                    }}
                  >
                    {product.reviews.map((review) => (
                      <Review_card key={review?._id} review={review} />
                    ))}
                  </Box>
                ) : (
                  <Typography>NO REVIEWS YET</Typography>
                )}
              </Box>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "black" }} />
          </Box>
        )}
      </Container>
    </>
  );
};

export default ProductDetailPage;
