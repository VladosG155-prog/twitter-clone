import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../types";

interface IState {
  profile?: IUser;
  isLoading: boolean;
}

const initialState: IState = {
  isLoading: false,
  profile: undefined,
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
  },
  selectors: {
    selectUser: (state) => state.profile!,
    selectSession: (state) => state,
  },
});

export const { selectUser, selectSession } = sessionSlice.selectors;
