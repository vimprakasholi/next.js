import { createAsyncThunk } from "@reduxjs/toolkit";

const { login } = require("@/api/auth");

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem("authToken", response.data?.authToken);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
