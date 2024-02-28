import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "gaga",
  initialState: { val: 0 },
  reducers: {},
});

export const store = configureStore(slice);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
