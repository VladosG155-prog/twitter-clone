import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../types";

interface IState {
  user?: IUser;
  isLoading: boolean;
}

const initialState: IState = {
  isLoading: false,
  user: undefined,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    userLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | undefined>) => {
      state.user = action.payload;
    },
  },
  selectors: {
    selectUser: (state) => state.user,
    selectSession: (state) => state,
  },
});

export const { selectUser, selectSession } = sessionSlice.selectors;
