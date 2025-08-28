import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";

const { createSlice } = require("@reduxjs/toolkit");

const userPreferenceSlice = createSlice({
  name: "userPreferences",
  initialState: {
    theme: LIGHT_THEME,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme == LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
  },
});

export const { toggleTheme } = userPreferenceSlice.actions;
export default userPreferenceSlice.reducer;
