import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import productReducer from "@/redux/product/productSlice";
import userPreferenceReducer from "@/redux/userPreferences/userPreferenceSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userPreferences: userPreferenceReducer,
  product: productReducer,
});

export default rootReducer;
