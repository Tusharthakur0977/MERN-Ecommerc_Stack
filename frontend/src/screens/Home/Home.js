import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ProductCard from "../../components/utilityComp/product/ProductCard";
import { clearErrors, getProduct } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useStyleHome } from "./HomeStyle";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useAlert } from "react-alert";

const Home = () => {
  const classes = useStyleHome();
  const theme = useTheme();
  var items = [
    { name: "cars" },
    { name: "planes" },
    { name: "nature" },
    { name: "tech" },
    { name: "sports" },
  ];

  // getting data from state of product reducers
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 0 20px 0",
        background:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(../assets/images/bg1.jpg)",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Carousel
        height="210px"
        interval="3000"
        sx={{ width: "95%", margin: "15px 0", borderRadius: "5px" }}
        indicatorIconButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        {items.map((item, i) => (
          <img
            key={i}
            src={`https://source.unsplash.com/random/970×240/?${item.name}`}
            alt={`pic ${i}`}
            height="240px"
            width="100%"
          />
        ))}
      </Carousel>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          background: "whitesmoke",
          margin: "0 0 20px 0",
          padding: "20px 30px",
          [theme.breakpoints.down("md")]: {
            padding: "20px",
            flexDirection: "column",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box>
          <Typography variant="h3">New Arrivals</Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur molestias, ab possimus minima ut nulla voluptate quidem
            eum sunt sapiente harum commodi! Veritatis blanditiis harum possimus
            necessitatibus. Corporis recusandae itaque quibusdam eveniet
            pariatur facilis et? Deserunt recusandae earum saepe officiis
            quibusdam animi eveniet quo aperiam, sapiente vel illo a eligendi.
            Numquam reprehenderit, impedit officia molestiae optio nihil
            accusantium atque quidem!
          </Typography>
        </Box>
        <img
          alt="NEW ARRIVALS"
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/wallpapers/rtx-3090/3090-wallpaper-3840x2160-r1.png"
          className={classes.newImg}
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ width: "100%", padding: "10px", background: "white" }}
        >
          Top Selling Product
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "30px",
            padding: "0 10px",
            rowGap: "70px",
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
