import { Button, ListItem, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropdownList = () => {
  const menuItems = [
    {
      title: "Fashion",
      submenu: ["Men", "Women", "Kids", "Shoes", "Accessories"],
    },
    {
      title: "Mobiles",
      submenu: ["Apple", "Redmi", "Realme", "OnePlus", "Asus"],
    },
    {
      title: "Laptops",
      submenu: ["Dell", "Asus", "HP", "Lenovo", "Acer"],
    },
    {
      title: "Electronics",
      submenu: ["Cameras", "Computer", "Sound System", "LED's"],
    },
    {
      title: "Furniture",
      submenu: ["Beds", "Sofas/Chairs", "Matress", "Almirahs"],
    },
  ];
  function MenuItems(items, depthLevel, i) {
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
      window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
      window.innerWidth > 960 && setDropdown(false);
    };
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          postion: "relative",
          justifyContent: "center",
          gap: "10px",
          minHeight: "100%",
        }}
        key={i}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items.submenu ? (
          <>
            <Typography
              fontWeight={"normal"}
              component={Button}
              sx={{ padding: "10px 8px 0 8px" }}
              variant="button"
              color="secondary"
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title} <ArrowDropDownIcon />
            </Typography>
            <Box sx={{ position: "relative" }}>
              {Dropdown(depthLevel, items.submenu, dropdown)}
            </Box>
          </>
        ) : (
          <Typography component={Button} variant="button" color="secondary">
            {items.title}
          </Typography>
        )}
      </Box>
    );
  }

  function Dropdown(depthLevel, submenus, dropdown) {
    depthLevel = depthLevel + 1;
    return (
      <Paper
        elevation={3}
        sx={{
          display: dropdown ? "flex" : "none",
          flexDirection: "column",
          width: "100%",
          alignItems: "flex-start",
          padding: "10px 0",
          zIndex: "10",
          position: "absolute",
        }}
      >
        {submenus.map((submenu, index) => {
          return (
            <Typography
              width={"100%"}
              textAlign="left"
              key={index}
              component={Button}
              variant="caption"
              color="secondary"
            >
              {submenu}
            </Typography>
          );
        })}
      </Paper>
    );
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <Typography
          fontWeight={"bolder"}
          sx={{
            fontSize: "18px",
            padding: "8px 10px 5px 10px",
            height: "100%",
            borderBottom: "2px solid crimson",
          }}
        >
          Categories
        </Typography>
        <Stack direction="row" spacing={3}>
          {menuItems &&
            menuItems.map((main, i) => {
              const depthLevel = 0;
              return MenuItems(main, depthLevel, i);
            })}
        </Stack>
      </Box>
    </>
  );
};

export default DropdownList;
