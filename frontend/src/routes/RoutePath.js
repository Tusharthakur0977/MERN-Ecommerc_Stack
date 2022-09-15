import ProductDetailPage from "../screens/productDetail/ProductDetailPage";
import ForgotPassword from "../screens/forgotPassword/ForgotPassword";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ProductsPage from "../screens/allProducts/ProductsPage";

const RoutePath = {
  home: {
    title: "Home",
    component: <Home />,
    path: "/",
  },
  login: {
    title: "Login",
    component: <Login />,
    path: "/login",
  },
  register: {
    title: "Register",
    component: <Register />,
    path: "/register",
  },
  forgotPassword: {
    title: "Forgot Password",
    component: <ForgotPassword />,
    path: "/forgotPassword",
  },
  allproducts: {
    title: "AllProducts",
    component: <ProductsPage />,
    path: "/products",
  },
  searchedProducts: {
    title: "SearchedProd",
    component: <ProductsPage />,
    path: "/products/:keyword",
  },
  productdetailpage: {
    title: "Product Page",
    component: <ProductDetailPage />,
    path: "/product/:id",
  },
};

export default RoutePath;
