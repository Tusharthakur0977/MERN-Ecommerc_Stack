import React, { useState } from "react";
import { Box, Button, Paper, Rating, Tooltip, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useStyleproductCard } from "./ProductStyle";

const ProductCard = ({ product }) => {
  const classes = useStyleproductCard();
  const [hover, setHover] = useState(false);

  return (
    <Paper className={classes.mainCont} elevation={5}>
      <Box sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
        <img
          className={classes.cardImage}
          src={product.images[0]?.url}
          alt={`${product.name.slice(0, 20)}....`}
        />
      </Box>
      <Box className={classes.cardDetails}>
        <Box className={classes.section2}>
          <Typography
            component={Button}
            fontFamily="vedanta"
            borderTop="1px solid grey"
            sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left" }}
            fullWidth
            color="secondary"
          >
            {product.name}
          </Typography>
        </Box>
        <Box className={classes.section1}>
          <Typography
            color="secondary"
            variant="body1"
            textAlign="left"
            fontWeight={"bold"}
          >
            {`₹${product.price}`}
          </Typography>
          <Rating
            precision={0.5}
            readOnly
            value={product.ratings}
            size="small"
            name="simple-controlled"
          />
        </Box>

        <Box sx={{ display: "flex", gap: "20px" }}>
          <Paper
            component={Button}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            elevation={hover ? 7 : 0}
            size="small"
            sx={{
              width: "60%",
              background: "black",
              color: "whitesmoke",
              "&:hover": {
                background: "whitesmoke",
              },
              transition: " .5s ease-in-out",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {hover ? (
                <LocalMallIcon sx={{ fontSize: "20px", color: "black" }} />
              ) : (
                " ADD to Cart"
              )}
            </Box>
          </Paper>
          <Tooltip arrow title="See Full Details">
            <Paper
              component={(Button, Link)}
              to={`/product/${product._id}`}
              elevation={6}
              size="small"
              sx={{
                width: "30%",
                background: "white",
                color: "black",
                textAlign: "center",
              }}
            >
              <ArrowForwardIcon />
            </Paper>
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductCard;
