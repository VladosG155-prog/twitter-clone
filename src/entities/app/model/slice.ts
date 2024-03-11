import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  showLoader: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.showLoader = action.payload;
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});
