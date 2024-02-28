import { configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
const slice = createSlice({
  name: "gaga",
  initialState: { val: 0 },
  reducers: {},
});

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    global: slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
