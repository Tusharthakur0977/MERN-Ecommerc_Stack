import { createTheme } from "@mui/material";
import React, { useState, createContext } from "react";

export const Theme = createContext();
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fdfdfd",
      contrastText: "#fdfdfd",
    },
    secondary: {
      main: "#000",
      contrastText: "#fdfdfd",
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0D0D0D",
    },
    secondary: {
      main: "#00000",
    },
  },
});
const ThemeContextprovider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <Theme.Provider value={{ isDarkTheme, handleTheme, lightTheme, DarkTheme }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeContextprovider;
