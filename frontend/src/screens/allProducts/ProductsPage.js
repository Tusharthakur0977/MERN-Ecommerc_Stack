import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import DropdownList from "./components/DropdownList";
import SearchBar from "../../components/utilityComp/Search_bar/SearchBar";
import ProductCard from "../../components/utilityComp/product/ProductCard";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  const perPageproduct = 2;

  const totalpages = Math.ceil(productsCount / perPageproduct);
  const { keyword } = useParams();
  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, error, keyword]);

  return (
    <>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "91vh",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Box
              sx={{
                mt: "5px",
                display: "flex",
                gap: "20px",
                height: "45px",
                width: "100%",
                padding: "0 20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <DropdownList />
              <SearchBar />
            </Box>
            <Box sx={{ display: "flex", margin: "0 0 20px 0" }}>
              <Box sx={{ flex: "0.3" }}></Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                  gap: "30px",
                  padding: "0 10px",
                  rowGap: "70px",
                }}
              >
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </Box>
            </Box>
            <Pagination count={totalpages} size="large" />
          </>
        )}
      </Container>
    </>
  );
};

export default ProductsPage;
