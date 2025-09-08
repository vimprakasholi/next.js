import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import productReducer from "@/redux/product/productSlice";
import userPreferenceReducer from "@/redux/userPreferences/userPreferenceSlice";
import cartReducer from "./cart/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  userPreferences: userPreferenceReducer,
});

export default rootReducer;
