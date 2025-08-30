import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import userPreferenceReducer from "@/redux/userPreferences/userPreferenceSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userPreferences: userPreferenceReducer,
});

export default rootReducer;
