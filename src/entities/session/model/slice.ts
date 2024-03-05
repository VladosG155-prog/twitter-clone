import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface IState {
  user?: User | null;
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
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
  selectors: {
    selectUser: (state) => state.user,
    selectSession: (state) => state,
  },
});

export const { selectUser, selectSession } = sessionSlice.selectors;
