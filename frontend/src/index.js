import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProvider from "./Context/Context";
import ThemeContextprovider from "./theme/Theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <ContextProvider>
        <ThemeContextprovider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeContextprovider>
      </ContextProvider>
    </AlertProvider>
  </Provider>
);
