import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/redux/auth/authSlice";
import userPreferenceSlice from "@/redux/userPreferences/userPreferenceSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    userPreferences: userPreferenceSlice,
  },
});

export { store };
