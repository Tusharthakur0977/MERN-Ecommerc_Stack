import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Layout/header/Header.js";
import Footer from "./components/Layout/footer/Footer";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, lightTheme, Theme } from "./theme/Theme";
import Approutes from "./routes/Approutes";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./redux/actions/darkModeAction";
const App = () => {
  const { isDarkTheme, lightTheme, DarkTheme } = useContext(Theme);
  // const isDarkTheme = useSelector((state) => state.darkMode);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : lightTheme}>
      <Header />
      <Container
        sx={{
          minHeight: "90vh",
          backgroundImage: "white",
        }}
        disableGutters
        maxWidth="xl"
      >
        <Approutes />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
