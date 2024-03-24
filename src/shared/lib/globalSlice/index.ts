import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

import { THEME } from "@/shared/const/theme";

interface IState {
  theme: THEME;
  showLoader: boolean;
  toasts: { text: string; type: string; id: string }[];
}

const initialState: IState = {
  theme: (localStorage.getItem("theme") as THEME) || THEME.LIGHT,
  showLoader: false,
  toasts: [],
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.showLoader = action.payload;
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    addToast: (
      state,
      action: PayloadAction<{ text: string; type: string; id?: string }>
    ) => {
      const { text, type, id } = action.payload;
      state.toasts.push({
        id: id || v4(),
        text,
        type,
      });
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(({ id }) => id !== action.payload);
    },
  },
});
