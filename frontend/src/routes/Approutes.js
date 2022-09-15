import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./RoutePath";

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path={RoutePath.home.path}
          element={RoutePath.home.component}
        />
        <Route
          exact
          path={RoutePath.login.path}
          element={RoutePath.login.component}
        />
        <Route
          exact
          path={RoutePath.register.path}
          element={RoutePath.register.component}
        />
        <Route
          exact
          path={RoutePath.forgotPassword.path}
          element={RoutePath.forgotPassword.component}
        />
        <Route
          exact
          path={RoutePath.productdetailpage.path}
          element={RoutePath.productdetailpage.component}
        />
        <Route
          exact
          path={RoutePath.allproducts.path}
          element={RoutePath.allproducts.component}
        />
        <Route
          path={RoutePath.searchedProducts.path}
          element={RoutePath.searchedProducts.component}
        />
      </Routes>
    </>
  );
};

export default Approutes;
