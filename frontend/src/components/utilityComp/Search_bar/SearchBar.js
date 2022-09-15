import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  input: {
    flex: 1,
    padding: "10px 0px 10px 15px",
    fontSize: ".8rem",
    height: "100%",
    border: "none",
    borderRadius: "5px",
    "&:focus": {
      color: "black",
      outline: "none",
    },
    "&:active": {
      border: "none",
    },
  },
});

const SearchBar = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [searchWord, setSearchWord] = useState(null);
  const handleSearch = () => {
    navigate(`/products/${searchWord}`);
  };
  return (
    <>
      <Box
        sx={{
          borderRadius: "5px",
          width: "300px",
          display: "flex",
          alignItems: "center",
        }}
        boxShadow={3}
      >
        <input
          className={classes.input}
          onInput={(e) => setSearchWord(e.target.value)}
          placeholder="Search..."
        />
        <IconButton onClick={handleSearch}>
          <Search style={{ fill: "black" }} />
        </IconButton>
      </Box>
    </>
  );
};

export default SearchBar;
