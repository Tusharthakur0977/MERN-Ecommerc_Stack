import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productReducers,
} from "./reducers/productReducer";
import { darkModeReducer } from "./reducers/darkModeReducer";

const reducer = combineReducers({
  products: productReducers,
  productDetails: productDetailsReducer,
  darkMode: darkModeReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
