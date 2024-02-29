import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface IState {
  user: User | null;
  isLoading: boolean;
}

const initialState: IState = {
  user: null,
  isLoading: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    userLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});
