import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../types";

interface IState {
  profile?: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  isLoading: false,
  profile: undefined,
  error: "",
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    userLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | undefined>) => {
      state.profile = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  selectors: {
    selectUser: (state) => state.profile!,
    selectSession: (state) => state,
  },
});

export const { selectUser, selectSession } = sessionSlice.selectors;
