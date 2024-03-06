import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../interfaces";

interface IState {
  user?: IUser | null;
  isLoading: boolean;
}

const initialState: IState = {
  isLoading: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    userLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
  },
  selectors: {
    selectUser: (state) => state.user,
    selectSession: (state) => state,
  },
});

export const { selectUser, selectSession } = sessionSlice.selectors;
